import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { studentSuccess, studentFailure } from './actions';

export function* createStudent({ payload }) {
  try {
    const response = yield call(api.post, 'students', payload);

    toast.success('Perfil criado com sucesso!');

    yield put(studentSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao criar perfil, confira seus dados!');
    yield put(studentFailure());
  }
}

export default all([
  takeLatest('@student/CREATE_STUDENT_REQUEST', createStudent),
]);
