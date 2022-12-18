import { takeEvery, call, put } from "redux-saga/effects";
import { serverCard } from "../api";
import { REG, regIn } from "../action";

export function* regSaga(action) {
  const { email, name, password } = action.payload;
  const success = yield call(serverCard, email, name, password);
  if (success) {
    yield put(regIn());
  }
}

export function* registrationSaga() {
  yield takeEvery(REG, regSaga);
}
