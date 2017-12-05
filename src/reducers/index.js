import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  // when application boots up it executes reducers to get some initial state
  libraries: LibraryReducer
});
