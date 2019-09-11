import API from './index';

export const References = async () => {
  const response = await API('post', '/main/references');
  return response;
};
export default { References };
