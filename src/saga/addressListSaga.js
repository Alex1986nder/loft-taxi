import { takeEvery, call, put } from "redux-saga/effects";
import { serverAdressList } from "../api";
import { GET_ADDRESS_LIST, setAddressList } from "../action";

export function* AddListSaga() {
  const success = yield call(serverAdressList);
  if (success) {
    yield put(setAddressList(success));
  }
}

export function* addressListSaga() {
  yield takeEvery(GET_ADDRESS_LIST, AddListSaga);
}
