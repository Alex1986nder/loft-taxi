import { takeEvery, call, put } from "redux-saga/effects";
import { serverRoute } from "../api";
import { GET_ROUTE, setRoute } from "../action";

export function* routSaga() {
  const success = yield call(serverRoute);
  if (success) {
    yield put(setRoute(success));
  }
}

export function* routeSaga() {
  yield takeEvery(GET_ROUTE, routSaga);
}
