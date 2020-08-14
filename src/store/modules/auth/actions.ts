import { action } from "typesafe-actions";

interface SignInData {
  email: string;
  password: string;
}

function signInRequest({ email, password }: SignInData) {
  return action('@auth/SIGN_IN_REQUEST', {
    email,
    password
  })
}

export default signInRequest;
