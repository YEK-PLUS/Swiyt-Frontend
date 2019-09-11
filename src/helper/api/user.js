import { UserDetails,PopulerTeachers,AllPopulerTeachers } from '../../api/user';

const GetUserDetails = async (username) => {
  let response = await UserDetails(username);
  return response;
};
const GetPopulerTeachers = async () => {
  let response = await PopulerTeachers();
  return response;
};
const GetAllPopulerTeachers = async () => {
  let response = await AllPopulerTeachers();
  return response;
};
export default { GetUserDetails,GetPopulerTeachers,GetAllPopulerTeachers };
