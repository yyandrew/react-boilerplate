import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../api';

function* fetchAlbums(action) {
  try {
    const albums = yield call(Api.fetchAlbums);
    yield put({ type: 'ALBUMS_FEATCH_SUCCESSED', payload: { albums } });
  } catch (e) {
    yield put({ type: 'ALBUMS_FEATCH_FAILED', message: e.message });
  }
}

function* mySage() {
  yield takeEvery('ALBUMS_FETCH_REQUESTED', fetchAlbums);
}

export default mySage;
