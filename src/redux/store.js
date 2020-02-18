import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { verifyAuth } from './actions/auth';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// store.subscribe(() => {
//   console.log(store.getState().noteList.noteList);
// });

store.dispatch(verifyAuth());

export default store;