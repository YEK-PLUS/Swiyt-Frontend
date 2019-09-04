import axios from 'axios';
import helpers from '../helper/storage';
const {get} = helpers;
export const instance = axios.create({
	baseURL:'http://localhost:8080/',
	timeout:5000,

});

export default async(type,path,body) => {
  const header = {
		headers:{
    	"Authorization":"Bearer " +
    	( get("UserToken") || _get("UserToken") )
  	}
	}
	let r = await instance.post(path,body,header);
	return await r;
}

instance.interceptors.response.use(
	function(response){
		return (response.data);
	},
	function(error){
		const code = error.response && error.response.data
		return (code);
	}
);
