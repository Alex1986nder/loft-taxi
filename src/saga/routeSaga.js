import { takeEvery, call, put } from "redux-saga/effects";
import { serverRoute } from "../api";
import { GET_ROUTE, setRoute } from "../action";

export function* routSaga(action) {
  const { address1, address2 } = action.payload;
  const success = yield call(serverRoute, address1, address2);
  if (success) {
    yield put(setRoute(success));
  }
}

export function* routeSaga() {
  yield takeEvery(GET_ROUTE, routSaga);
}
