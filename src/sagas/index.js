import { put, call, takeEvery } from 'redux-saga/effects';

export function* incrementAsync() {
  yield call(() => {}, 1000);
  yield put({ type: 'INCREMENT' });
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
