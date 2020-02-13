import {
  ADD_CHECK_ITEM,
  ADD_NOTE_SUCCESS,
  UPDATE_NOTE_FORM
} from '../../constants/action-types';

const initialState = {
  title: '',
  content: '',
  checkList: {}
}

export const addNoteForm = (state = initialState, action = {}) => {
  switch (action.type) {   
    case UPDATE_NOTE_FORM:
      return { ...state, [action.payload.name]: action.payload.value }
    
    case ADD_CHECK_ITEM:
      return { ...state, checkList: { ...state.checkList, ...action.checkItem } }

    case ADD_NOTE_SUCCESS:
      return initialState;
  
    default:
      return state;
  }
}