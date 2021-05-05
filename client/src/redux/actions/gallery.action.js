import { api } from '../../API';
import paginationActions from './pagination.action';

export const ADD_POSTS = 'ADD_POSTS';
export const FETCHING_POSTS = 'FETCHING_POSTS';

const setFetchingImages = (fetching) => ({
  type: FETCHING_POSTS,
  fetching,
});

const addPosts = (posts) => ({
  type: ADD_POSTS,
  posts,
});

const getNextPosts = () => async (dispatch, getState) => {
  const { pagination } = getState();

  if (!pagination.hasNextPage || pagination.page == null) return;

  dispatch(setFetchingImages(true));

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
};

const fetchPostsData = async (params) => {
  try {
    const { data } = await api.getAllPosts(params);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const actionSet = {
  getNextPosts,
};

export default actionSet;
