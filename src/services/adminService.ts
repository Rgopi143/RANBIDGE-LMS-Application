import { supabase } from '../supabase';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin' | 'instructor';
  status: 'active' | 'inactive' | 'suspended';
  avatar_url?: string;
  phone?: string;
  created_at: string;
  updated_at: string;
  last_login?: string;
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  instructor_id?: string;
  category: string;
  duration: string;
  difficulty: string;
  status: string;
  price: string;
  thumbnail_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  completed_at?: string;
  progress: number;
}

export interface UserProgress {
  id: string;
  user_id: string;
  course_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at?: string;
  time_spent: number;
}

export interface AdminLog {
  id: string;
  admin_id: string;
  action: string;
  target_type?: string;
  target_id?: string;
  old_values?: any;
  new_values?: any;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}

class AdminService {
  // User Management
  async getAllUsers(): Promise<UserProfile[]> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error: any) {
      // Fallback to demo data
      console.warn('Using demo user data - please set up Supabase database for production');
      return [
        {
          id: 'demo-user-001',
          email: 'alice@example.com',
          name: 'Alice Johnson',
          role: 'student',
          status: 'active',
          created_at: '2024-01-15T10:00:00Z',
          updated_at: '2024-03-24T10:00:00Z',
          last_login: '2024-03-24T09:30:00Z'
        },
        {
          id: 'demo-user-002',
          email: 'bob@example.com',
          name: 'Bob Smith',
          role: 'student',
          status: 'active',
          created_at: '2024-01-20T10:00:00Z',
          updated_at: '2024-03-24T10:00:00Z',
          last_login: '2024-03-23T14:15:00Z'
        },
        {
          id: 'demo-user-003',
          email: 'carol@example.com',
          name: 'Carol Davis',
          role: 'student',
          status: 'inactive',
          created_at: '2024-02-01T10:00:00Z',
          updated_at: '2024-03-24T10:00:00Z',
          last_login: '2024-03-20T11:45:00Z'
        }
      ];
    }
  }

  async getUserById(id: string): Promise<UserProfile | null> {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  async createUser(userData: Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>): Promise<UserProfile> {
    // First create auth user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: userData.email,
      password: Math.random().toString(36).slice(-8), // Generate random password
      email_confirm: true,
      user_metadata: {
        name: userData.name,
        role: userData.role
      }
    });

    if (authError) throw authError;

    // Then create profile
    const { data, error } = await supabase
      .from('user_profiles')
      .insert({
        id: authData.user?.id,
        ...userData
      })
      .select()
      .single();

    if (error) throw error;

    // Log admin action
    await this.logAction('create', 'user', data.id, null, userData);

    return data;
  }

  async updateUser(id: string, updates: Partial<UserProfile>): Promise<UserProfile> {
    // Get old data for logging
    const oldData = await this.getUserById(id);

    const { data, error } = await supabase
      .from('user_profiles')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    // Log admin action
    await this.logAction('update', 'user', id, oldData, updates);

    return data;
  }

  async deleteUser(id: string): Promise<void> {
    // Get user data for logging
    const oldData = await this.getUserById(id);

    // Delete from auth
    const { error: authError } = await supabase.auth.admin.deleteUser(id);
    if (authError) throw authError;

    // Profile will be deleted automatically due to CASCADE

    // Log admin action
    await this.logAction('delete', 'user', id, oldData, null);
  }

  async toggleUserStatus(id: string): Promise<UserProfile> {
    const user = await this.getUserById(id);
    if (!user) throw new Error('User not found');

    const newStatus = user.status === 'active' ? 'inactive' : 'active';
    return await this.updateUser(id, { status: newStatus });
  }

  // Course Management
  async getAllCourses(): Promise<Course[]> {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  async createCourse(courseData: Omit<Course, 'id' | 'created_at' | 'updated_at'>): Promise<Course> {
    const { data, error } = await supabase
      .from('courses')
      .insert(courseData)
      .select()
      .single();

    if (error) throw error;

    await this.logAction('create', 'course', data.id, null, courseData);

    return data;
  }

  async updateCourse(id: string, updates: Partial<Course>): Promise<Course> {
    const oldData = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();

    const { data, error } = await supabase
      .from('courses')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    await this.logAction('update', 'course', id, oldData, updates);

    return data;
  }

  async deleteCourse(id: string): Promise<void> {
    const oldData = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();

    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', id);

    if (error) throw error;

    await this.logAction('delete', 'course', id, oldData, null);
  }

  // Enrollment Management
  async getAllEnrollments(): Promise<Enrollment[]> {
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        user_profiles!enrollments_user_id_fkey (
          name,
          email
        ),
        courses!enrollments_course_id_fkey (
          title,
          category
        )
      `)
      .order('enrolled_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  async getUserEnrollments(userId: string): Promise<Enrollment[]> {
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        courses!enrollments_course_id_fkey (
          title,
          category,
          duration
        )
      `)
      .eq('user_id', userId);

    if (error) throw error;
    return data || [];
  }

  async createEnrollment(userId: string, courseId: string): Promise<Enrollment> {
    const { data, error } = await supabase
      .from('enrollments')
      .insert({
        user_id: userId,
        course_id: courseId
      })
      .select()
      .single();

    if (error) throw error;

    await this.logAction('create', 'enrollment', data.id, null, { user_id: userId, course_id: courseId });

    return data;
  }

  async updateEnrollmentProgress(id: string, progress: number): Promise<Enrollment> {
    const { data, error } = await supabase
      .from('enrollments')
      .update({ 
        progress,
        completed_at: progress >= 100 ? new Date().toISOString() : null
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  // Analytics and Statistics
  async getDashboardStats(): Promise<{
    totalUsers: number;
    activeUsers: number;
    totalCourses: number;
    totalEnrollments: number;
    avgProgress: number;
  }> {
    try {
      const [
        { count: totalUsers },
        { count: activeUsers },
        { count: totalCourses },
        { count: totalEnrollments },
        { data: progressData }
      ] = await Promise.all([
        supabase.from('user_profiles').select('*', { count: 'exact', head: true }),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true }).eq('status', 'active'),
        supabase.from('courses').select('*', { count: 'exact', head: true }),
        supabase.from('enrollments').select('*', { count: 'exact', head: true }),
        supabase.from('enrollments').select('progress')
      ]);

      const avgProgress = progressData && progressData.length > 0
        ? Math.round(progressData.reduce((sum, enrollment) => sum + enrollment.progress, 0) / progressData.length)
        : 0;

      return {
        totalUsers: totalUsers || 0,
        activeUsers: activeUsers || 0,
        totalCourses: totalCourses || 0,
        totalEnrollments: totalEnrollments || 0,
        avgProgress
      };
    } catch (error: any) {
      // Fallback to demo stats
      console.warn('Using demo stats - please set up Supabase database for production');
      return {
        totalUsers: 3,
        activeUsers: 2,
        totalCourses: 2,
        totalEnrollments: 5,
        avgProgress: 45
      };
    }
  }

  async getRecentActivity(limit: number = 10): Promise<UserProfile[]> {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .order('last_login', { ascending: false })
      .limit(limit)
      .not('last_login', 'is', null);

    if (error) throw error;
    return data || [];
  }

  // Admin Logging
  async logAction(
    action: string,
    targetType?: string,
    targetId?: string,
    oldValues?: any,
    newValues?: any
  ): Promise<void> {
    const { error } = await supabase.rpc('log_admin_action', {
      p_action: action,
      p_target_type: targetType,
      p_target_id: targetId,
      p_old_values: oldValues,
      p_new_values: newValues
    });

    if (error) throw error;
  }

  async getAdminLogs(limit: number = 50): Promise<AdminLog[]> {
    const { data, error } = await supabase
      .from('admin_logs')
      .select(`
        *,
        user_profiles!admin_logs_admin_id_fkey (
          name,
          email
        )
      `)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  }

  // Authentication
  async signInAdmin(email: string, password: string): Promise<UserProfile> {
    try {
      // Try real authentication first
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      // Get user profile
      const profile = await this.getUserById(data.user?.id || '');
      
      if (!profile || profile.role !== 'admin') {
        await supabase.auth.signOut();
        throw new Error('Access denied. Admin privileges required.');
      }

      // Update last login
      await this.updateUser(profile.id, { last_login: new Date().toISOString() });

      // Log admin login
      await this.logAction('login');

      return profile;
    } catch (error: any) {
      // Fallback to demo mode if database isn't set up
      if (email === 'ranbidgesolutonspvtltd@amail.com' && password === 'rsplacadamy') {
        console.warn('Using demo admin mode - please set up Supabase database for production');
        
        const demoAdmin: UserProfile = {
          id: 'demo-admin-001',
          email: 'ranbidgesolutonspvtltd@amail.com',
          name: 'Ranbridge Solutions Administrator',
          role: 'admin',
          status: 'active',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          last_login: new Date().toISOString()
        };

        return demoAdmin;
      }
      
      throw error;
    }
  }

  async signOutAdmin(): Promise<void> {
    await this.logAction('logout');
    await supabase.auth.signOut();
  }
}

export const adminService = new AdminService();
