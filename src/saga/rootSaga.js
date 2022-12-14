import { fork, all } from "redux-saga/effects";

import {
  paymentSaga,
  routeSaga,
  authorizationSaga,
  registrationSaga,
  addressListSaga,
} from "./index";

export function* rootSaga() {
  yield all([
    fork(registrationSaga),
    fork(authorizationSaga),
    fork(addressListSaga),
    fork(routeSaga),
    fork(paymentSaga),
  ]);
}
