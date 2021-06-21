import { SET_PAGE_PARAMETERS } from '../actions/pagination.action';

const INITIAL_STATE = {
  limit: 10,
  page: 1,
  totalPages: 1,
  hasNextPage: true,
};

const paginationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PAGE_PARAMETERS:
      return { ...state, ...action.pageParameters };
    default:
      return state;
  }
};

export default paginationReducer;
