import Auth from '../../api/auth';
const {Login} = Auth;
const TryLogin = async() => {
  let response = await Login() || false;
  response = response == 'Unauthorized' ? false : response;
  return await response;
}
export default {TryLogin}
