import {
  UUID,
  ADD_CHECK_ITEM,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_ERROR
} from '../../constants/action-types';
import { database } from '../../firebase/firebase';

export const addCheckItem = (checkItem) => ({
  type: ADD_CHECK_ITEM,
  checkItem
});

export const addNote = (note) => {
  return (dispatch) => {
    database.child(UUID).push(note)
      .then(() => dispatch({ type: ADD_NOTE_SUCCESS }))
      .catch(() => dispatch({ type: ADD_NOTE_ERROR }));
  }
};



