import { combineReducers } from 'redux';
import user from './user';
import popup from './popup';

const MainReducer = combineReducers({
  user,
  popup,
});
export default MainReducer;
