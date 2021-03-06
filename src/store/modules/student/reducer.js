import produce from 'immer';

const INITIAL_STATE = {
  dto: null,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/SET_STUDENT_SUCCESS': {
        draft.dto = action.payload.data;
        break;
      }
      default:
        return state;
    }
  });
}
