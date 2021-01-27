// import { HYDRATE } from 'next-redux-wrapper';


// const initialState = {
//   user: {
//     isLoggedIn: false,
//     user: null,
//     signUpdate: {},
//     loginData: {}
//   },
//   post: {
//     mainPosts: [],
//   }
// }

// export const loginAction = () => {
//   return {
//     type: 'LOG_IN',
//     data
//   }
// }

// export const logoutAction = () => {
//   return {
//     type: 'LOG_OUT',
//     data
//   }
// }

// // action creator
// const ChangeNickname = (data) => {
//   return {
//     type: 'CHANGE_NICKNAME',
//     data,
//   }
// }

// ChangeNickname('sunnyss');

// store.dispatch(ChangeNickname('바꿔바꿔'));

// // (이전상태, 액션) => 다음상태
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case HYDRATE: 
//       return { ...state, ...action.payload }
//     case 'LOG_IN':
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           isLoggedIn: true,
//           user: action.data
//         }
//       };
//     case 'LOG_OUT':
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           isLoggedIn: false,
//           user: null
//         }
//       };
//     default: 
//       return state
//   }
// };

// export default rootReducer;