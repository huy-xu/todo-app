import {
  UUID,
  ADD_CHECK_ITEM,
  ADD_NOTE_SUCCESS,
  UPDATE_NOTE_FORM
} from '../../constants/action-types';
import { database } from '../../firebase/firebase';

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
    database.child(UUID).push(note)
      .then(() => dispatch({ type: ADD_NOTE_SUCCESS }))
      .catch(error => console.log(error));
  }
};



