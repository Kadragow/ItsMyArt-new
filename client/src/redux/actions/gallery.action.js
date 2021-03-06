import { api } from 'API';
import paginationActions from './pagination.action';

export const ADD_POSTS = 'ADD_POSTS';
export const FETCHING_POSTS = 'FETCHING_POSTS';
export const SET_POSTS = 'SET_POSTS';

const setFetchingImages = (fetching) => ({
  type: FETCHING_POSTS,
  fetching,
});

const addPosts = (posts) => ({
  type: ADD_POSTS,
  posts,
});

const setPosts = (posts) => ({
  type: SET_POSTS,
  posts,
});

const clearPosts = () => async (dispatch) => {
  dispatch(setPosts([]));
  dispatch(paginationActions.resetPageParameters());
};

const getNextPosts = () => async (dispatch, getState) => {
  const { pagination, gallery } = getState();

  if (!pagination.hasNextPage || pagination.page == null || gallery.fetching)
    return;

  dispatch(setFetchingImages(true));

  try {
    const { docs, nextPage, hasNextPage, totalPages } = await fetchPostsData(
      pagination
    );

    dispatch(
      paginationActions.setPageParameters({
        page: nextPage,
        hasNextPage,
        totalPages,
      })
    );
    dispatch(addPosts(docs));
    dispatch(setFetchingImages(false));
  } catch (e) {
    console.log(e);
  }
};

const fetchPostsData = async (params) => {
  try {
    const { data } = await api.getAllPosts(params);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const actionSet = {
  getNextPosts,
  clearPosts,
};

export default actionSet;
