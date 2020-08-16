import AsyncStorage from '@react-native-community/async-storage';
import api from './api';

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
    AsyncStorage.setItem('token', token.toString());
  } else {
    delete api.defaults.headers.common['x-auth-token'];
    AsyncStorage.removeItem('token');
  }
};

export default setAuthToken;
