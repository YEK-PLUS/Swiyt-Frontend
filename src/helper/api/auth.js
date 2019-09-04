import { Login } from '../../api/auth';

const TryLogin = async () => {
  let response = await Login() || false;
  response = response === 'Unauthorized' ? false : response;
  return response;
};
export default { TryLogin };
