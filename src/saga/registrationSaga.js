import { takeEvery, call, put} from "redux-saga/effects";
import { serverRegister} from "../api";
import { REG, logIn } from "../action";


export function* regSaga (action){
  // const {email, password} = action.payload;
  const success = yield call(serverRegister, action.payload)
  if (success){
    yield put(logIn(success.token, action.payload.email))
  }
}

export function* registrationSaga() {
  yield takeEvery(REG, regSaga)
}