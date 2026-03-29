// Assessments Service - Shared between Admin and User views
export interface Question {
  id: string;
  question: string;
  type: 'essay' | 'multiple-choice' | 'coding' | 'true-false';
  courseId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  created: string;
  options?: string[]; // For multiple choice questions
  solutionTemplate?: string; // For coding questions
}

export interface Answer {
  id: string;
  questionId: string;
  userId: string;
  answer: string;
  score: number;
  graded: boolean;
  submitted: string;
  feedback?: string;
}

export interface UserAssignment {
  id: string;
  questionId: string;
  userId: string;
  status: 'not-started' | 'in-progress' | 'submitted' | 'graded';
  submittedAt?: string;
  score?: number;
  feedback?: string;
  dueDate: string;
}

// Mock data - In production, this would come from Supabase/Database
export const mockQuestions: Question[] = [
  { 
    id: 'q1', 
    question: 'What is the difference between abstract class and interface in Java?', 
    type: 'essay', 
    courseId: 'java-fundamentals', 
    difficulty: 'medium', 
    points: 10, 
    created: '2024-03-25T10:00:00Z' 
  },
  { 
    id: 'q2', 
    question: 'Explain the concept of polymorphism with examples', 
    type: 'essay', 
    courseId: 'java-fundamentals', 
    difficulty: 'medium', 
    points: 15, 
    created: '2024-03-25T10:15:00Z' 
  },
  { 
    id: 'q3', 
    question: 'What is React Hooks?', 
    type: 'multiple-choice', 
    courseId: 'react-frontend', 
    difficulty: 'easy', 
    points: 5, 
    created: '2024-03-25T11:00:00Z',
    options: [
      'Functions that let you use state and other React features',
      'A way to style React components',
      'A database for React applications',
      'A testing framework for React'
    ]
  },
  { 
    id: 'q4', 
    question: 'Create a REST API using Spring Boot', 
    type: 'coding', 
    courseId: 'spring-boot', 
    difficulty: 'hard', 
    points: 25, 
    created: '2024-03-25T11:30:00Z',
    solutionTemplate: '@RestController\n@RequestMapping("/api")\npublic class ApiController {\n    // TODO: Implement REST endpoints\n}'
  }
];

export const mockAnswers: Answer[] = [
  { 
    id: 'a1', 
    questionId: 'q1', 
    userId: 'user1', 
    answer: 'Abstract class can have method implementations while interface cannot...', 
    score: 8, 
    graded: true, 
    submitted: '2024-03-25T12:00:00Z', 
    feedback: 'Good explanation but missing some key points' 
  },
  { 
    id: 'a2', 
    questionId: 'q2', 
    userId: 'user2', 
    answer: 'Polymorphism allows objects of different types to be treated as objects of a common type...', 
    score: 12, 
    graded: true, 
    submitted: '2024-03-25T12:30:00Z', 
    feedback: 'Excellent examples provided' 
  },
  { 
    id: 'a3', 
    questionId: 'q3', 
    userId: 'user3', 
    answer: 'React Hooks are functions that let you use state and other React features...', 
    score: 5, 
    graded: true, 
    submitted: '2024-03-25T13:00:00Z', 
    feedback: 'Correct answer' 
  },
  { 
    id: 'a4', 
    questionId: 'q4', 
    userId: 'user1', 
    answer: '@RestController\n@RequestMapping("/api")\npublic class ApiController { ... }', 
    score: 0, 
    graded: false, 
    submitted: '2024-03-25T13:30:00Z', 
    feedback: null 
  }
];

class AssessmentsService {
  // Get all questions (for admin)
  async getAllQuestions(): Promise<Question[]> {
    // In production: await supabase.from('questions').select('*');
    return new Promise((resolve) => setTimeout(() => resolve(mockQuestions), 500));
  }

  // Get questions for a specific course (for users)
  async getQuestionsByCourse(courseId: string): Promise<Question[]> {
    // In production: await supabase.from('questions').select('*').eq('courseId', courseId);
    return new Promise((resolve) => 
      setTimeout(() => resolve(mockQuestions.filter(q => q.courseId === courseId)), 500)
    );
  }

  // Get questions for a user (based on their enrolled courses)
  async getQuestionsForUser(userId: string, userCourses: string[]): Promise<Question[]> {
    // In production: More complex query based on user enrollments
    return new Promise((resolve) => 
      setTimeout(() => resolve(mockQuestions.filter(q => userCourses.includes(q.courseId))), 500)
    );
  }

  // Get all answers (for admin)
  async getAllAnswers(): Promise<Answer[]> {
    // In production: await supabase.from('answers').select('*');
    return new Promise((resolve) => setTimeout(() => resolve(mockAnswers), 500));
  }

  // Get answers for a specific user
  async getAnswersByUser(userId: string): Promise<Answer[]> {
    // In production: await supabase.from('answers').select('*').eq('userId', userId);
    return new Promise((resolve) => 
      setTimeout(() => resolve(mockAnswers.filter(a => a.userId === userId)), 500)
    );
  }

  // Get answers for a specific question
  async getAnswersByQuestion(questionId: string): Promise<Answer[]> {
    // In production: await supabase.from('answers').select('*').eq('questionId', questionId);
    return new Promise((resolve) => 
      setTimeout(() => resolve(mockAnswers.filter(a => a.questionId === questionId)), 500)
    );
  }

  // Submit an answer
  async submitAnswer(answer: Omit<Answer, 'id' | 'score' | 'graded' | 'submitted'>): Promise<Answer> {
    // In production: await supabase.from('answers').insert(answer);
    const newAnswer: Answer = {
      ...answer,
      id: `a${Date.now()}`,
      score: 0,
      graded: false,
      submitted: new Date().toISOString()
    };
    mockAnswers.push(newAnswer);
    return new Promise((resolve) => setTimeout(() => resolve(newAnswer), 500));
  }

  // Create a question (admin only)
  async createQuestion(question: Omit<Question, 'id' | 'created'>): Promise<Question> {
    // In production: await supabase.from('questions').insert(question);
    const newQuestion: Question = {
      ...question,
      id: `q${Date.now()}`,
      created: new Date().toISOString()
    };
    mockQuestions.push(newQuestion);
    return new Promise((resolve) => setTimeout(() => resolve(newQuestion), 500));
  }

  // Update a question (admin only)
  async updateQuestion(questionId: string, updates: Partial<Question>): Promise<Question> {
    // In production: await supabase.from('questions').update(updates).eq('id', questionId);
    const index = mockQuestions.findIndex(q => q.id === questionId);
    if (index !== -1) {
      mockQuestions[index] = { ...mockQuestions[index], ...updates };
      return new Promise((resolve) => setTimeout(() => resolve(mockQuestions[index]), 500));
    }
    throw new Error('Question not found');
  }

  // Delete a question (admin only)
  async deleteQuestion(questionId: string): Promise<void> {
    // In production: await supabase.from('questions').delete().eq('id', questionId);
    const index = mockQuestions.findIndex(q => q.id === questionId);
    if (index !== -1) {
      mockQuestions.splice(index, 1);
      return new Promise((resolve) => setTimeout(() => resolve(), 500));
    }
    throw new Error('Question not found');
  }

  // Grade an answer (admin only)
  async gradeAnswer(answerId: string, score: number, feedback?: string): Promise<Answer> {
    // In production: await supabase.from('answers').update({ score, graded: true, feedback }).eq('id', answerId);
    const answer = mockAnswers.find(a => a.id === answerId);
    if (answer) {
      answer.score = score;
      answer.graded = true;
      answer.feedback = feedback;
      return new Promise((resolve) => setTimeout(() => resolve(answer), 500));
    }
    throw new Error('Answer not found');
  }

  // Get user assignments (combines questions and user answers)
  async getUserAssignments(userId: string, userCourses: string[]): Promise<UserAssignment[]> {
    const questions = await this.getQuestionsForUser(userId, userCourses);
    const answers = await this.getAnswersByUser(userId);
    
    return questions.map(question => {
      const answer = answers.find(a => a.questionId === question.id);
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 7); // Due in 7 days
      
      return {
        id: `assign_${question.id}_${userId}`,
        questionId: question.id,
        userId,
        status: answer ? 'submitted' : 'not-started',
        submittedAt: answer?.submitted,
        score: answer?.score,
        feedback: answer?.feedback,
        dueDate: dueDate.toISOString()
      };
    });
  }
}

export const assessmentsService = new AssessmentsService();
