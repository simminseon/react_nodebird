const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {}
  },
  post: {
    mainPost: []
  }
}

// action creator
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data
  }
}

// action creator
// const changeNickname = (data) =>  {
//   return {
//     type: 'CHANGE_NICKNAME',
//     data
//   }
// }

// (이전상태, 액션) => return 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true
        }
      }
  }
}

export default rootReducer;