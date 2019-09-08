import API from './index';

export const PopulerCourse = async () => {
  const response = await API('post', '/course/populer');
  return response;
};
