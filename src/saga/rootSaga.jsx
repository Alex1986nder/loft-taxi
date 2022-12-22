import { fork, all } from "redux-saga/effects";
import {addressListSaga} from "./addressListSaga"
import {
  paymentSaga,
  routeSaga,
  authorizationSaga,
  registrationSaga,
  // addressListSaga,
} from "./index";

export function* rootSaga() {
  yield all([
    fork(authorizationSaga),
    fork(registrationSaga),
    fork(addressListSaga),
    fork(paymentSaga),
    fork(routeSaga),
  ]);
}
