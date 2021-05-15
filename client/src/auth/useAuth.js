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

  return { login, register };
};

export default useAuth;
