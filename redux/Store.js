import createSagaMiddleware from '@redux-saga/core'
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import rootSaga from './Saga';
import rootReducer from './Reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
