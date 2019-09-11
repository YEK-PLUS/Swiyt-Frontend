import API from './index';

export const UserDetails = async (username) => {
  const response = await API('post', '/user/userDetails',{username});
  return response;
};
export const PopulerTeachers = async (username) => {
  const response = await API('post', '/user/populer');
  return response;
};
export const AllPopulerTeachers = async (username) => {
  const response = await API('post', '/user/populer/all');
  return response;
};
export default { UserDetails };
