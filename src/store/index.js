import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();
const reducer = combineReducers({
  state: (state = {}) => state
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

export default function storeConfig(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
