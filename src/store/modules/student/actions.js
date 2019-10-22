export function createStudentRequest(nome, email, password, turma_id) {
  return {
    type: '@student/CREATE_STUDENT_REQUEST',
    payload: { nome, email, password, turma_id },
  };
}

export function updateStudentRequest(id, nome, email, password, turma_id) {
  return {
    type: '@student/UPDATE_STUDENT_REQUEST',
    payload: { id, nome, email, password, turma_id },
  };
}

export function getStudentRequest(id) {
  return {
    type: '@student/GET_STUDENT_REQUEST',
    payload: { id },
  };
}

export function setStudentRequest(data) {
  return {
    type: '@student/SET_STUDENT_SUCCESS',
    payload: { data },
  };
}
