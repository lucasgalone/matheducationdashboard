import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { setStudentRequest } from './actions';

export function* createStudent({ payload }) {
  try {
    yield call(api.post, 'students', payload);

    toast.success('Estudante criado com sucesso!');

    history.push('/student');
  } catch (err) {
    toast.error('Erro ao criar Estudante, confira seus dados!');
  }
}

export function* updateStudent({ payload }) {
  try {
    yield call(api.put, 'students', payload);
    toast.success('Estudante alterado com sucesso!');
    history.push('/student');
  } catch (err) {
    toast.error('Erro ao alterar estudante, confira seus dados!');
  }
}

export function* getStudent({ payload }) {
  try {
    const response = yield call(api.get, `students/${payload.id}`);
    yield put(setStudentRequest(response.data));
    history.push('/student/update');
  } catch (err) {
    toast.error('Esse estudante não existe na base de dados!');
  }
}

export default all([
  takeLatest('@student/CREATE_STUDENT_REQUEST', createStudent),
  takeLatest('@student/UPDATE_STUDENT_REQUEST', updateStudent),
  takeLatest('@student/GET_STUDENT_REQUEST', getStudent),
]);
