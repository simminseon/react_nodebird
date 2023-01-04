import { all, fork, takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../reducers/user";

function loginAPI(data) {
  return axios.post("/api/login", data);
}

function logoutAPI() {
  return axios.post("/api/logout");
}

function signUpAPI() {
  return axios.post("/api/logout");
}

function* login(action) {
  try {
    console.log("saga login");
    // const result = yield call(logoutAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* logout() {
  try {
    const result = yield call(loginAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  // 일회용이라 while문을 사용하지 않으면 한번밖에 실행되지 않음
  // yield take("LOG_IN_REQUEST", login);
  // ---
  // while문은 직관적이지 않기 때문에 take -> takeEvery가 while문을 대신해줌
  // while (true) {
  //   yield take("LOG_IN_REQUEST", login);
  // }
  // ---
  // yield takeEvery("LOG_IN_REQUEST", login);
  // ---
  // 클릭을 여러번 했을 경우 마지막 클릭만 실행되도록 해줌 takeLatest / 첫번째 클릭만 동작하게 하고싶으면 takeLeading
  // yield throttle("LOG_IN_REQUEST", login, 2000) // 초 제한
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
