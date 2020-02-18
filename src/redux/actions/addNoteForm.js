import {
  ADD_CHECK_ITEM,
  ADD_NOTE_SUCCESS,
  UPDATE_NOTE_FORM
} from '../../constants/action-types';
import { database, firebaseAuth } from '../../firebase/firebase';

export const updateNoteForm = (payload) => ({
  type: UPDATE_NOTE_FORM,
  payload
});

export const addCheckItem = (checkItem) => ({
  type: ADD_CHECK_ITEM,
  checkItem
});

export const addNote = (note) => {
  return (dispatch) => {
    database.ref('noteData/' + firebaseAuth.currentUser.uid).push(note)
      .then(() => dispatch({ type: ADD_NOTE_SUCCESS }))
      .catch(error => console.log(error));
  }
};



