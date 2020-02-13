import {
  GET_NOTE_LIST_PENDING,
  GET_NOTE_LIST_SUCCESS,
  CHANGE_COMPLETE_STATE,
  DELETE_NOTE,
  EDIT_NOTE,
  EDIT_CHECK_ITEM,
  UPDATE_NOTE
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

    case EDIT_NOTE:
      const noteList = state.noteList;
      const noteId = state.noteList[action.payload.noteId];
      return { 
        ...state, 
        noteList: {
          ...noteList,
          [action.payload.noteId]: {
            ...noteId,
            [action.payload.name]: action.payload.value
          }
        }
      };

    case EDIT_CHECK_ITEM:
      const noteList2 = state.noteList; //doi ten vi trung ten voi case EDIT_NOTE
      const noteId2 = state.noteList[action.payload.noteId]; //doi ten vi trung ten voi case EDIT_NOTE
      const checkList = state.noteList[action.payload.noteId].checkList;
      const checkItemId = state.noteList[action.payload.noteId].checkList[action.payload.checkItemId];
      return {
        ...state,
        noteList: {
          ...noteList2,
          [action.payload.noteId]: {
            ...noteId2,
            checkList: {
              ...checkList,
              [action.payload.checkItemId]: {
                ...checkItemId,
                [action.payload.name]: action.payload.value
              }
            }
          }
        }
      };

    case UPDATE_NOTE:
      return state;

    default:
      return state;
  }
}