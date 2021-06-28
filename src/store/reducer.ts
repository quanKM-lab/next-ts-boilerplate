import { combineReducers } from 'redux';
import { StoreState } from '../models/store';
import authenticationReducer from './authentication/authentication.reducer';

const rootReducer = combineReducers<StoreState>({
  authentication: authenticationReducer,
});

export default rootReducer;
