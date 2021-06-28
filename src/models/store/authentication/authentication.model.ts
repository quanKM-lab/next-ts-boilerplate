export interface AuthenticationStore {
  loading: boolean;
  user: User | null;
  error: string;
}

export interface User {}
