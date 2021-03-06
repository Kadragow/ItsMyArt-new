import {
  ADD_POSTS,
  FETCHING_POSTS,
  SET_POSTS,
} from '../actions/gallery.action';

const INITIAL_STATE = {
  posts: [],
  fetching: false,
};

const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.posts };
    case ADD_POSTS:
      return { ...state, posts: state.posts.concat(action.posts) };
    case FETCHING_POSTS:
      return { ...state, fetching: action.fetching };
    default:
      return state;
  }
};

export default galleryReducer;
