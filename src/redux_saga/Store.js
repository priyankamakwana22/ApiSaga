import { applyMiddleware, legacy_createStore as createStore} from "redux";
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from "./Saga";
import dataReducer from "./Reducer";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(dataReducer , applyMiddleware(sagaMiddleWare));

export default store;

sagaMiddleWare.run(rootSaga);