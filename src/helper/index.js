import Storage from './storage';
import Api from './api';
import MiddleWare from './middleware.js';

export default { ...Api, ...Storage, ...MiddleWare };
