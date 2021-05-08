import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import galleryReducer from './gallery.reducer';
import paginationReducer from './pagination.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  gallery: galleryReducer,
  pagination: paginationReducer,
});

export default rootReducer;
