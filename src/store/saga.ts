import { fork } from 'typed-redux-saga';
import authenticateSaga from './authentication/authentication.saga';

export default function* rootSaga() {
  yield fork(authenticateSaga);
}
