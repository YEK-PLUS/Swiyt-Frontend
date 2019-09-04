import API from './index';

export const Login = async () => {
  const response = await API('post', '/auth/login');
  return response;
};
export default { Login };
