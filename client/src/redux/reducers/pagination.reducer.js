import {
  SET_PAGE_PARAMETERS,
  RESET_PAGE_PARAMETERS,
} from '../actions/pagination.action';

const INITIAL_STATE = {
  limit: 10,
  page: 0,
  totalPages: 1,
  hasNextPage: true,
};

const paginationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PAGE_PARAMETERS:
      return { ...state, ...action.pageParameters };
    case RESET_PAGE_PARAMETERS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default paginationReducer;
