import {call, all, takeLatest, put} from 'redux-saga/effects';

import axios from 'axios';
import {GET_DATA, GET_DATA_SAGA} from './Action';

function* getDataFromApi() {
  try {
    const response = yield call(
      axios.get,'https://reactnative.dev/movies.json',
    );
    console.log('🚀 ~ function*getDataFromApi ~ response:', JSON.stringify(response.data,0,2) );
    // JSON.stringify(response.data,0,2)
    yield put({type: GET_DATA_SAGA, data: response.data});
  } catch (error) {
    console.log(error);
  }
}

function* rootSaga() {
  yield takeLatest(GET_DATA, getDataFromApi);
}

// function* rootSaga() {
//   yield all(apiSaga());
// }

export default rootSaga;
