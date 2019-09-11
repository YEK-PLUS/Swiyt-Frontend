import LoginActions from './auth';
import CourseActions from './course';
import UserActions from './user';
import OtherActions from './others';

export default {
  ...LoginActions, ...CourseActions, ...UserActions, ...OtherActions,
};
