export interface Quote {
  id: number;
  text: string;
  author: string;
  mood: Mood;
  category: string;
}

export type Mood = 'inspired' | 'calm' | 'energized' | 'focused' | 'peaceful';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}</Action>