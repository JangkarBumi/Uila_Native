import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../src/reducers/index';
import setAuthToken from './utils/setAuthToken';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

let currentState = store.getState();

console.log(currentState.auth.token);

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token.toString();
    setAuthToken(token);
  }
});

export default store;
