import { api } from './baseApi';
import { User } from '../../types/auth';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

// Mock user data for testing
const mockUsers = {
  'superadmin@example.com': {
    password: 'superadmin123',
    userData: {
      id: '1',
      email: 'superadmin@example.com',
      name: 'Super Admin',
      role: 'SUPER_ADMIN' as const,
    },
  },
  'admin@example.com': {
    password: 'admin123',
    userData: {
      id: '2',
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'ADMIN' as const,
    },
  },
  'user@example.com': {
    password: 'user123',
    userData: {
      id: '3',
      email: 'user@example.com',
      name: 'Regular User',
      role: 'USER' as const,
    },
  },
};

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      queryFn: async (credentials) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        const user = mockUsers[credentials.email];
        
        if (!user || user.password !== credentials.password) {
          return {
            error: {
              status: 401,
              data: { message: 'Invalid credentials' },
            },
          };
        }

        return {
          data: {
            user: user.userData,
            token: 'mock-jwt-token',
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;