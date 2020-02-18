import {
  GET_NOTE_LIST_PENDING,
  GET_NOTE_LIST_SUCCESS,
  CHANGE_COMPLETE_STATE,
  DELETE_NOTE,
  EDIT_NOTE,
  EDIT_CHECK_ITEM,
  UPDATE_NOTE
} from '../../constants/action-types';
import { database, firebaseAuth } from '../../firebase/firebase';

export const getNoteList = () => {
  return (dispatch) => {
    dispatch({ type: GET_NOTE_LIST_PENDING });
    database.ref('noteData/' + firebaseAuth.currentUser.uid).on('value', (data) => {
      dispatch({ type: GET_NOTE_LIST_SUCCESS, noteList: data.val() })
    });
  }
};

export const changeCompleteState = (payload) => {
  return (dispatch) => {
    database.ref('noteData/' + firebaseAuth.currentUser.uid + '/' + payload.noteId + '/checkList/' + payload.checkItemId)
      .update({ isComplete: !payload.isComplete })
      .then(() => dispatch({ type: CHANGE_COMPLETE_STATE }));
  }
};

export const deleteNote = (noteId) => {
  return (dispatch) => {
    database.ref('noteData/' + firebaseAuth.currentUser.uid + '/' + noteId + '/')
      .remove()
      .then(() => dispatch({ type: DELETE_NOTE }));
  }
};

export const editNote = (payload) => ({
  type: EDIT_NOTE,
  payload
});

export const editCheckItem = (payload) => ({
  type: EDIT_CHECK_ITEM,
  payload
});

export const updateNote = (payload) => {
  return (dispatch) => {
    database.ref('noteData/' + firebaseAuth.currentUser.uid + '/' + payload.noteId)
      .update(payload.note)
      .then(() => dispatch({ type: UPDATE_NOTE }));
  }
};