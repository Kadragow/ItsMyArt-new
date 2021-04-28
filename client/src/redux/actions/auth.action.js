export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

const setUser = (item) => ({
  type: SET_USER,
  item,
});

const logout = (item) => ({
  type: LOGOUT,
  item,
});

export default {
  setUser,
  logout,
};
