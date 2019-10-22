import produce from 'immer';

const INITIAL_STATE = {
  dto: null,
};

export default function turma(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@turma/SET_TURMA_SUCCESS': {
        draft.dto = action.payload.data;
        break;
      }
      default:
        return state;
    }
  });
}
