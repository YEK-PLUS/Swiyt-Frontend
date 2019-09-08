import API from './index';

export const PopulerCourse = async () => {
  const response = await API('post', '/course/populer');
  return response;
};
export const AllPopulerCourses = async () => {
  const response = await API('post', '/course/populer/all');
  return response;
};
export const Subscriptions = async () => {
  const response = await API('post', '/course/subscriptions');
  return response;
};
export const AllSubscriptions = async () => {
  const response = await API('post', '/course/subscriptions');
  return response;
};
export default { PopulerCourse,Subscriptions,AllPopulerCourses,AllSubscriptions };
