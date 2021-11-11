import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import rocketReducer from './State/rocketsState';
import missionsReducer from './State/MissionsState';

const reducer = combineReducers({ rocketReducer, missionsReducer });

const rocketStore = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default rocketStore;
