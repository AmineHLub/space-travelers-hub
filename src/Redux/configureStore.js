import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import rocketReducer from './State/rocketsState';

const reducer = combineReducers({ rocketReducer });

const rocketStore = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default rocketStore;
