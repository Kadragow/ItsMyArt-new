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

const actionSet = {
  setUser,
  logout
}

export default actionSet;
