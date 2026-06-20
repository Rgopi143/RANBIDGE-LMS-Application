import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uoowvjpeuakuvgenhgyx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvb3d2anBldWFrdXZnZW5oZ3l4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTg4NjMxNSwiZXhwIjoyMDk3NDYyMzE1fQ.-DcxjArcaNOl8LLDOqmhg5tYjfsy0zt3DXOcKhLSAX0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);