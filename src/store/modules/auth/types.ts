import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>; // O authaction conterá qualquer tipo, exportado pelas actions.

export interface AuthState {
  readonly loadingSignInRequest: boolean,
  readonly isSignedIn: boolean;
}
