import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import counter from '../reducers/counter';

const logger = createLogger();

const rootReducer = combineReducers({
  counter
});
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

console.log(createStoreWithMiddleware);
export default function storeConfig(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
