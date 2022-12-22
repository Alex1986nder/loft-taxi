import { takeEvery, call, put } from "redux-saga/effects";
import { serverRoute } from "../api";
import { GET_ROUTE, getRoute, setRoute } from "../action";

export function* routSaga(action) {
  try {
    const { address1, address2 } = action.payload;
    const success = yield call(serverRoute, address1, address2);
    if (success) {
      yield put(getRoute(success));
    }
  } catch (err) {
    yield put(setRoute([]));
  }
}

export function* routeSaga() {
  yield takeEvery(GET_ROUTE, routSaga);
}
