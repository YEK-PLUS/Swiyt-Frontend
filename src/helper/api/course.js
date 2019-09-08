import { PopulerCourse,Subscriptions,AllPopulerCourses } from '../../api/course';

const GetPopulerCourses = async () => {
  let response = await PopulerCourse();
  return response;
};
const GetAllPopulerCourses = async () => {
  let response = await AllPopulerCourses();
  return response;
};
const GetSubscriptions = async () => {
  let response = await Subscriptions();
  return response;
};
export default { GetPopulerCourses,GetSubscriptions,GetAllPopulerCourses };
