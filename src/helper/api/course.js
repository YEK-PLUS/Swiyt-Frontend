import {
  PopulerCourse, Subscriptions, AllPopulerCourses,
  AllSubscriptions,Course,CourseAuth,WishList
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
const GetCourse = async (adminNick,courseName) => {
  const response = await Course(adminNick,courseName);
  return response;
};
const GetCourseWithAuth = async (adminNick,courseName) => {
  const response = await CourseAuth(adminNick,courseName);
  return response;
};
const ChangeWishList = async (lessonUid,wishList) => {
  const response = await WishList(lessonUid,wishList);
  return response;
};
export default {
  GetPopulerCourses, GetSubscriptions, GetAllPopulerCourses,
  GetAllSubscriptions,GetCourse, GetCourseWithAuth,ChangeWishList
};
