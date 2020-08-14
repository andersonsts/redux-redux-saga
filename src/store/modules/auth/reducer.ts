import { AuthState, AuthAction } from "./types";

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false
}

export default function auth(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return { // Tudo retornado de um reducer ficará salvo na store
        ...state, // Retora a copia do estado atual
        loadingSignInRequest: true
      }

    default:
      return state;
  }
}
