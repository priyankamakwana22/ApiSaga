import { combineReducers } from 'redux';
import {FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS} from './Action';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, loading: true, error: null};
    case FETCH_DATA_SUCCESS:
      return {...state, data: action.data, loading: false};
      case FETCH_DATA_FAILURE : 
      return {...state, error: action.error, loading: false };
      default : 
      return state;
  }
};

const rootReducer = combineReducers({
    data: dataReducer
})

export default rootReducer;