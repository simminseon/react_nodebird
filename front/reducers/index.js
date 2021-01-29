import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';
import { combineReducers } from 'redux';

const initialState = {
  user: {
    
  },
  post: {
    
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
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE: 
        return { ...state, ...action.payload }
      default:
        return state;
    }
  },
  user,
  post,
}

export default rootReducer;