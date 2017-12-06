import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  // when application boots up it executes reducers to get some initial state
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
