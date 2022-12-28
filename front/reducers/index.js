const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpdata: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = (data) => {
  return {
    type: "LOG_OUT",
  };
};

// (이전상태, 액션) => 다음 상태
// 이전상태와 액션을 통해서 다음 상태를 만들어내는 함수
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };

    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
