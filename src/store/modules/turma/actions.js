export function createTurmaRequest(nome) {
  return {
    type: '@turma/CREATE_TURMA_REQUEST',
    payload: { nome },
  };
}

export function getTurmaRequest(id) {
  return {
    type: '@turma/GET_TURMA_REQUEST',
    payload: { id },
  };
}

export function setTurmaRequest(data) {
  return {
    type: '@turma/SET_TURMA_SUCCESS',
    payload: { data },
  };
}

export function updateTurmaRequest(id, nome) {
  return {
    type: '@turma/UPDATE_TURMA_REQUEST',
    payload: { id, nome },
  };
}
