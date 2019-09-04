import { USER } from '../types';

const { LOGINED, SAVEUSERDETAILS } = USER;
export const UserLogined = (payload = true) => {
  const a = {
    type: LOGINED,
    value: payload,
  };
  return (a);
};

export const UserDetails = (details) => {
  const a = {
    type: SAVEUSERDETAILS,
    value: details,
  };
  return (a);
};
