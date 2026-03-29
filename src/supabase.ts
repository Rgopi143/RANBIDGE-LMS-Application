import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zihnupbzbamssonrrlhd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppaG51cGJ6YmFtc3NvbnJybGhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2Mzg2MjksImV4cCI6MjA4OTIxNDYyOX0.S9XgevovJhUYpP0TUSJYY7NC6fOSgWxlHFHq10m3W40';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
