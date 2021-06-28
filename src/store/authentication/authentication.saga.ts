import { all, put, takeLatest } from 'typed-redux-saga';
import { doLogin, doLogout } from './authentication.action';

function* handleLogin(action: ReturnType<typeof doLogin.request>) {
  try {
    yield put(doLogin.success({}));
  } catch (e) {
    yield put(doLogin.failure('Error'));
  }
}

function* handleLogout() {
  try {
    yield* put(doLogout.success());
  } catch (e) {
    yield* put(doLogout.failure());
  }
}

export default function* authenticateSaga() {
  yield* all([takeLatest(doLogin.request, handleLogin), takeLatest(doLogout.request, handleLogout)]);
}
