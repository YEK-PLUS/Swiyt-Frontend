import {
  PopulerCourse, Subscriptions, AllPopulerCourses, AllSubscriptions,
} from '../../api/course';

const GetPopulerCourses = async () => {
  const response = await PopulerCourse();
  return response;
};
const GetAllPopulerCourses = async () => {
  const response = await AllPopulerCourses();
  return response;
};
const GetSubscriptions = async () => {
  const response = await Subscriptions();
  return response;
};
const GetAllSubscriptions = async () => {
  const response = await AllSubscriptions();
  return response;
};
export default {
  GetPopulerCourses, GetSubscriptions, GetAllPopulerCourses, GetAllSubscriptions,
};
