const Ssave = (key, value) => (typeof window !== 'undefined' ? sessionStorage.setItem(key, value) : null);
const Sget = (key) => (typeof window !== 'undefined' ? sessionStorage.getItem(key) : null);
const Sremove = (key) => (typeof window !== 'undefined' ? sessionStorage.removeItem(key) : null);
const save = (key, value) => {
  Ssave(key, value);
  return (typeof window !== 'undefined' ? localStorage.setItem(key, value) : null);
};
const get = (key) => (typeof window !== 'undefined' ? localStorage.getItem(key) : null);
const remove = (key) => {
  Sremove(key);
  return (typeof window !== 'undefined' ? localStorage.removeItem(key) : null);
};
export default {
  save, get, remove, Sget, Ssave, Sremove,
};
