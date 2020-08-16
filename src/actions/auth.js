import api from '../utils/api';
import {LOGIN_FAIL, LOGIN_SUCCESS, USER_LOADED} from './types';

// Login User
export const login = (email, password) => async (dispatch) => {
  try {
    const res = await api.post('/users/signin', email, password);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    console.log(err);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/users');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
