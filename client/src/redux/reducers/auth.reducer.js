import { SET_USER, LOGOUT } from '../actions/auth.action';

const INITIAL_STATE = {
  isAuthenticated: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.item,
        isAuthenticated: true,
      };

    case LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };

    default:
      return state;
  }
};

export default authReducer;
