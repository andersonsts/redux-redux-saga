import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { AuthAction, AuthState } from './modules/auth/types';

export interface StoreState {
  auth: AuthState;
}

export type StoreAction = AuthAction; // Caso tenha mais tipos basta AuthAction | OutraAction |

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
}
