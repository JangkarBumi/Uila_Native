import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../src/reducers/index';

const middleware = [thunk];

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
};

export default configureStore;
