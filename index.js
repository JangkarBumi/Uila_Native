/**
 * @format
 */

import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import {loadUser} from './src/actions/auth';
import App from './src/App';
import store from './src/store';
import setAuthToken from './src/utils/setAuthToken';

const RNRedux = () => {
  useEffect(() => {
    const configToken = async () => {
      setAuthToken(await AsyncStorage.getItem('token'));
    };
    configToken();
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
