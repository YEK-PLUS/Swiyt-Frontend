import LoginActions from './auth';
import CourseActions from './course';
import UserActions from './user';
export default { ...LoginActions,...CourseActions,...UserActions };
