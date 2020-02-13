import {
  GET_NOTE_LIST_PENDING,
  GET_NOTE_LIST_SUCCESS,
  CHANGE_COMPLETE_STATE,
  DELETE_NOTE
} from '../../constants/action-types';

const initialState = {
  isPending: false,
  noteList: {}
}

export const noteList = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_NOTE_LIST_PENDING:
      return { ...state, isPending: true };

    case GET_NOTE_LIST_SUCCESS:
      return { ...state, noteList: { ...action.noteList }, isPending: false };

    case CHANGE_COMPLETE_STATE:
      return state;

    case DELETE_NOTE:
      return state;

    default:
      return state;
  }
}