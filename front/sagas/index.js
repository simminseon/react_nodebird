import { all, fork, take, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

function addPostAPI(data) {
  return axios.post("/api/addPost", data);
}

function logoutAPI() {
  return axios.post("/api/logout");
}

function loginAPI(data) {
  return axios.post("/api/login", data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: error.response.data,
    });
  }
}

function* logout() {
  try {
    const result = yield call(loginAPI);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: error.response.data,
    });
  }
}

// 4. 이 함수가 실행되며 요청/실패 동작
// fork는 비동기 함수 호출, call은 동기 함수 호출
function* login(action) {
  try {
    const result = yield call(logoutAPI, action.data);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: error.response.data,
    });
  }
}

// 1. 이벤트 리스너(같은 역할) 만들기
function* watchLogin() {
  // 일회용이라 while문을 사용하지 않으면 한번밖에 실행되지 않음
  // yield take("LOG_IN_REQUEST", login);
  // ---
  // while문은 직관적이지 않기 때문에 take -> takeEvery가 while문을 대신해줌
  // while (true) {
  //   yield take("LOG_IN_REQUEST", login);
  // }
  // ---
  // yield takeEvery("LOG_IN_REQUEST", login); // 3. LOG_IN_REQUEST이 실행될 때는
  // ---
  // 클릭을 여러번 했을 경우 마지막 클릭만 실행되도록 해줌 takeLatest / 첫번째 클릭만 동작하게 하고싶으면 takeLeading
  yield takeLatest("LOG_IN_REQUEST", login); // 3. LOG_IN_REQUEST이 실행될 때는
}

// 1. 이벤트 리스너(같은 역할) 만들기
function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logout);
}

// 1. 이벤트 리스너(같은 역할) 만들기
function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]); // 2. 이벤트 리스너 등록
}
