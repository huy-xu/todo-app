import { combineReducers } from 'redux';
import { addNoteForm } from '../reducers/addNoteForm';
import { noteList } from '../reducers/noteList';
import { auth } from '../reducers/auth';

export const rootReducer = combineReducers({ addNoteForm, noteList, auth });