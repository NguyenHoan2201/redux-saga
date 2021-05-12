import { take, put, call, fork, select, all, takeLatest } from 'redux-saga/effects';
import {authentication} from '../../services/apis/auth.js';
import {auth, AUTH, REQUEST, SUCCESS, FAILURE} from '../../actions';

export function* doAuthentication({userName, password}){
  try{
    const resp = yield call(authentication, {userName, password});
    console.log(resp)
    yield put(auth.success(resp))
  }catch(e){
    yield put(auth.failure(e))
  }
}

export function* watchAuthentication(){
  yield takeLatest(AUTH[REQUEST], doAuthentication)
}

export default watchAuthentication;