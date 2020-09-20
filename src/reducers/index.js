import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import notificationReducer from './notificationReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  movies: movieReducer,
  common: notificationReducer,
  filters: filterReducer,
});
