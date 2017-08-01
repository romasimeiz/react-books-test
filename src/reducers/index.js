import { combineReducers } from 'redux';
import BookReducer from "./reducer_books";
import ActiveBookReducer from "./reducer_active_book";

const rootReducer = combineReducers({
  //state: (state = {}) => state
  books : BookReducer,
  activeBook : ActiveBookReducer
});

export default rootReducer;
