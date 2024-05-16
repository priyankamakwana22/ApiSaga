import {put,takeLatest, all, call} from 'redux-saga/effects';
import {FETCH_DATA, fetchDataFailure} from './Action';
import axios from 'axios';

function* fetchData() {
  try {
    const response = yield call('https://fakestoreapi.com/products');
    console.log("responseresponse",response);
    // console.log(JSON.stringify(response.data.body));
    // yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* watchFetchData() {
  yield takeLatest(FETCH_DATA, fetchData);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
