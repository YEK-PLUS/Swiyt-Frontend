import API from './index';

export const UserDetails = async (username) => {
  const response = await API('post', '/user/userDetails',{username});
  return response;
};
export default { UserDetails };
