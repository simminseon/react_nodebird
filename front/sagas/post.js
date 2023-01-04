import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "../reducers/post";

function addPostAPI(data) {
  return axios.post("/api/addPost", data);
}
function addCommentAPI(data) {
  return axios.post("/api/addComment", data);
}

// 4. 이 함수가 실행되며 요청/실패 동작
// fork는 비동기 함수 호출, call은 동기 함수 호출
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: ADD_POST_FAILURE,
      data: error.response.data,
    });
  }
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: error.response.data,
    });
  }
}

// 1. 이벤트 리스너(같은 역할) 만들기
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost); // 3. ADD_POST_REQUEST가 실행될 때는
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]); // 2. 이벤트 리스너 등록
}
