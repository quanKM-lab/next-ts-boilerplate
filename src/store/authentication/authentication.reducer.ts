import { AuthenticationStore } from 'models/store/authentication/authentication.model';

import { createReducer } from 'typesafe-actions';

import { doLogin, doLogout } from './authentication.action';

const INIT_STATE: AuthenticationStore = {
  loading: false,
  user: null,
  error: '',
};

const authenticationReducer = createReducer(INIT_STATE)
  .handleAction(doLogin.request, (state) => ({
    ...state,
    loading: true,
    user: null,
    error: '',
  }))
  .handleAction(doLogin.success, (state, action) => ({
    ...state,
    loading: false,
    user: action.payload,
    error: '',
  }))
  .handleAction(doLogin.failure, (state, action) => ({
    ...state,
    user: null,
    error: action.payload,
    loading: false,
  }))
  .handleAction(doLogout.success, (state) => ({
    ...state,
    user: null,
  }));

export default authenticationReducer;
