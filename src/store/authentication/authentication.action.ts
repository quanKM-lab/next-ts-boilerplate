import { createAsyncAction } from 'typesafe-actions';

interface LoginPayload {
  username: string;
  password: string;
}

interface User {}
export const doLogin = createAsyncAction('DO_LOGIN_REQUESTED', 'DO_LOGIN_SUCCESS', 'DO_LOGIN_FAILURE')<
  LoginPayload,
  User,
  string
>();

export const doLogout = createAsyncAction('LOGOUT_REQUESTED', 'LOGOUT_SUCCESS', 'LOGOUT_FAILURE')<void, void, void>();
