import API from './index';

export const Login = async() => {
	return await API('post','/auth/login');
}
export default {Login}
