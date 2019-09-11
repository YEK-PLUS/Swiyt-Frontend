import { UserDetails, PopulerTeachers, AllPopulerTeachers } from '../../api/user';

const GetUserDetails = async (username) => {
  const response = await UserDetails(username);
  return response;
};
const GetPopulerTeachers = async () => {
  const response = await PopulerTeachers();
  return response;
};
const GetAllPopulerTeachers = async () => {
  const response = await AllPopulerTeachers();
  return response;
};
export default { GetUserDetails, GetPopulerTeachers, GetAllPopulerTeachers };
