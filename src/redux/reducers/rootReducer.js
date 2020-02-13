import { combineReducers } from 'redux';
import { navigation } from '../reducers/navigation';
import { addNoteForm } from '../reducers/addNoteForm';
import { noteList } from '../reducers/noteList';

export const rootReducer = combineReducers({ navigation, addNoteForm, noteList });