export interface AuthenticationStore {
  loading: boolean;
  user: User | null;
  error: string;
  token: string;
}

export interface User {}
