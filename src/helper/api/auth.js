import { Login, Token, Singup } from '../../api/auth';

const TryLogin = async () => {
  let response = await Login() || false;
  response = response === 'Unauthorized' ? false : response;
  return response;
};
const GetToken = async (username, password) => {
  const response = await Token(username, password);
  return response;
};
const TrySingup = async (username, password, mail) => {
  const response = await Singup(username, password, mail);
  return response;
};
export default { TryLogin, GetToken, TrySingup };
