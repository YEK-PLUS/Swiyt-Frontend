import API from './index';

export const Login = async () => {
  const response = await API('post', '/auth/login');
  return response;
};
export const Token = async (username, password) => {
  const response = await API('post', '/auth/token', { username, password });
  return response;
};
export const Singup = async (username, password, mail) => {
  const response = await API('post', '/auth/register', { username, password, mail });
  return response;
};
export default { Login, Token, Singup };
