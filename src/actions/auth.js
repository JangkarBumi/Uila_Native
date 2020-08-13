import api from '../utils/api';
import {LOGIN_FAIL, LOGIN_SUCCESS} from './types';

// Login User
export const login = (email, password) => async (dispatch) => {
  try {
    const res = await api.post('/users/signin', email, password);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // dispatch(loadUser());
  } catch (err) {
    console.log(err);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
