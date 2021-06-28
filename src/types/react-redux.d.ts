import 'react-redux';
import { StoreState } from '../models/store';

declare module 'react-redux' {
  interface DefaultRootState extends StoreState {}
}
