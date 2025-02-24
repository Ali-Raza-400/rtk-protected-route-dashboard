export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'USER';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}