import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import student from './student/reducer';
import turma from './turma/reducer';

export default combineReducers({
  auth,
  user,
  student,
  turma,
});
