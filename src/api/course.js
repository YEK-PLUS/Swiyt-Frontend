import API from './index';

export const PopulerCourse = async () => {
  const response = await API('post', '/course/populer');
  return response;
};
export const Subscriptions = async () => {
  const response = await API('post', '/course/subscriptions');
  return response;
};
export default { PopulerCourse,Subscriptions };
