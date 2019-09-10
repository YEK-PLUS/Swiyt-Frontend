import { UserDetails,PopulerTeachers } from '../../api/user';

const GetUserDetails = async (username) => {
  let response = await UserDetails(username);
  return response;
};
const GetPopulerTeachers = async () => {
  let response = await PopulerTeachers();
  return response;
};
export default { GetUserDetails,GetPopulerTeachers };
