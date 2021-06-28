import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware, { END, Task } from 'redux-saga';
import { StoreState } from '../models/store';
import reducer from './reducer';
import rootSaga from './saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<Store<StoreState>>(makeStore);

export async function stopAndAwaitSagaTask(store: SagaStore) {
  store.dispatch(END);

  await store?.sagaTask?.toPromise();
}
