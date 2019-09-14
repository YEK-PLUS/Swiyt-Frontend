import axios from 'axios';
import helpers from '../helper/storage';

const { get, Sget } = helpers;
export const instance = axios.create({
  baseURL: 'http://159.146.28.45:8080/',
  timeout: 5000,

});

export default async (type, path, body) => {
  const header = {
    headers: {
      Authorization: `Bearer ${get('UserToken') || Sget('UserToken')}`,
    },
  };
  console.log(body);
  const r = await instance.post(path, body, header);
  return r;
};

instance.interceptors.response.use(
  (response) => (response.data),
  (error) => {
    const code = error.response && error.response.data;
    return (code);
  },
);
