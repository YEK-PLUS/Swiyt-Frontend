import { UserDetails } from '../../api/user';

const GetUserDetails = async (username) => {
  let response = await UserDetails(username);
  return response;
};
export default { GetUserDetails };
