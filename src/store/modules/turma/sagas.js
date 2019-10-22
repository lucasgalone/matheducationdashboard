import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { setTurmaRequest } from './actions';

export function* createTurma({ payload }) {
  try {
    yield call(api.post, 'turmas', payload);
    toast.success('Turma criada com sucesso!');

    history.push('/turma');
  } catch (err) {
    toast.error('Erro ao criar turma, confira seus dados!');
  }
}

export function* getTurma({ payload }) {
  try {
    const response = yield call(api.get, `turmas/${payload.id}`);
    console.log(response.data);
    yield put(setTurmaRequest(response.data));
    history.push('/turma/update');
  } catch (err) {
    toast.error('Essa turma não existe na base de dados!');
  }
}

export function* updateTurma({ payload }) {
  try {
    yield call(api.put, 'turmas', payload);
    toast.success('Turma alterada com sucesso!');
    history.push('/turma');
  } catch (err) {
    toast.error('Erro ao alterar turma, confira seus dados!');
  }
}

export default all([
  takeLatest('@turma/CREATE_TURMA_REQUEST', createTurma),
  takeLatest('@turma/UPDATE_TURMA_REQUEST', updateTurma),
  takeLatest('@turma/GET_TURMA_REQUEST', getTurma),
]);
