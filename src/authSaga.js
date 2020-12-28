import { AUTHENTICATE, logIn } from "./actions";
import { serverLogIn } from "./api";
import { takeEvery, call, put } from "redux-saga/effects";

function* authenticate(action) {
  const { email, password } = action.payload;
  const success = yield call(serverLogIn, email, password);
  if (success) {
    yield put(logIn());
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticate);
}
