import { api } from 'API';
import { ACCESS_TOKEN } from 'constants/constants';
import { useDispatch } from 'react-redux';
import allActions from 'redux/actions';

const useAuth = () => {
  const dispatch = useDispatch();

  const login = async (loginData) => {
    try {
      const { data } = await api.login(loginData);
      localStorage.setItem(ACCESS_TOKEN, `${data.token}`);

      delete data.token;

      dispatch(allActions.authActions.setUser(data.result));

      return 'success';
    } catch ({ response }) {
      return response;
    }
  };

  const register = async (registerData) => {
    try {
      const { data } = await api.register(registerData);
      localStorage.setItem(ACCESS_TOKEN, `${data.token}`);

      delete data.token;

      dispatch(allActions.authActions.setUser(data.result));

      return 'success';
    } catch ({ response }) {
      return response;
    }
  };

  const logout = async () => {
    dispatch(allActions.authActions.logout());
    localStorage.removeItem(ACCESS_TOKEN);
  };

  const getCurrentUser = async () => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      try {
        const { data } = await api.getCurrentUser();
        dispatch(allActions.authActions.setUser(data));
      } catch ({ response }) {
        if (response?.status === 500) return;
        logout();
      }
    }
  };

  return { login, logout, register, getCurrentUser };
};

export default useAuth;
