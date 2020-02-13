import {
  UUID,
  GET_NOTE_LIST_PENDING,
  GET_NOTE_LIST_SUCCESS,
  CHANGE_COMPLETE_STATE,
  DELETE_NOTE
} from '../../constants/action-types';
import { database } from '../../firebase/firebase';

export const getNoteList = () => {
  return (dispatch) => {
    dispatch({ type: GET_NOTE_LIST_PENDING });
    database.child(UUID).on('value', (data) => {
      dispatch({ type: GET_NOTE_LIST_SUCCESS, noteList: data.val() })
    });
  }
};

export const changeCompleteState = (payload) => {
  return (dispatch) => {
    database.child(UUID + '/' + payload.noteId + '/checkList/' + payload.checkItemId)
      .update({ isComplete: !payload.isComplete })
      .then(() => dispatch({ type: CHANGE_COMPLETE_STATE }));
  }
};

export const deleteNote = (noteId) => {
  return (dispatch) => {
    database.child(UUID + '/' + noteId + '/')
      .remove()
      .then(() => dispatch({ type: DELETE_NOTE }));
  }
};