export function createStudentRequest(nome, email, password, turma) {
  return {
    type: '@student/CREATE_STUDENT_REQUEST',
    payload: { nome, email, password, turma },
  };
}

export function studentSuccess(student) {
  return {
    type: '@student/STUDENT_SUCCESS',
    payload: { student },
  };
}

export function studentFailure() {
  return {
    type: '@student/FAILURE_REQUEST',
  };
}
