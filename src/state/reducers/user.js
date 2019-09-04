import { USER } from '../types';

const { LOGINED, SAVEUSERDETAILS } = USER;
const UserDefaultState = {
  logined: false,
  UserDetails: {},
};
const User = (state = UserDefaultState, action) => {
  switch (action.type) {
    case LOGINED:
      return { ...state, logined: action.value };
    case SAVEUSERDETAILS:
      return { ...state, UserDetails: action.value };
    default:
      return state;
  }
};

export default User;
