import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

// (이전상태, 액션) => 다음 상태
// 이전상태와 액션을 통해서 다음 상태를 만들어내는 함수
const rootReducer = combineReducers({
  // HYDRATE를 위해 index 추가한 것
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("hyderate", HYDRATE);

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
