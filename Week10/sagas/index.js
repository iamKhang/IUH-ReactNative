import { all } from 'redux-saga/effects';
import jobSaga from './jobSaga';

export default function* rootSaga() {
  yield all([jobSaga()]);
}
