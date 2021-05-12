import { all, fork } from 'redux-saga/effects';

import watchAuthentication from './modules/auth/saga';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './modules/auth/reducer';
import { combineReducers } from 'redux';


function* rootSaga() {
  yield all([fork(watchAuthentication)])
}
const rootReducer = combineReducers({ 
  auth: authReducer 
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;