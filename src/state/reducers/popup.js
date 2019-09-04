import { POPUP } from '../types';

const popup = (state = {
  singup: false,
  login: false,
  forgotpassword: false,
}, action) => {
  switch (action.type) {
    case POPUP.login:
      return { ...state, login: action.payload };
    case POPUP.singup:
      return { ...state, singin: action.payload };
    case POPUP.forgotpassword:
      return { ...state, forgotpassword: action.payload };
    default:
      return state;
  }
};

export default popup;
