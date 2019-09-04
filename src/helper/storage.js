const save = (key , value) => {
	_save(key,value)
	return (typeof window != 'undefined'?localStorage.setItem(key,value):null);
}
const get = (key) => {
	return (typeof window != 'undefined'?localStorage.getItem(key):null);
}
const remove = (key) => {
	_remove(key)
	return (typeof window != 'undefined'?localStorage.removeItem(key):null);
}
const _save = (key , value) => {
	return (typeof window != 'undefined'?sessionStorage.setItem(key,value):null);
}
const _get = (key) => {
	return (typeof window != 'undefined'?sessionStorage.getItem(key):null);
}
const _remove = (key) => {
	return (typeof window != 'undefined'?sessionStorage.removeItem(key):null);
}
module.exports = {save,get,remove,_save,_get,_remove}
