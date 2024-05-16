import { GET_DATA_SAGA } from "./Action"

const initialState = {
    data : {}
}

const dataReducer = ( state = initialState, action ) =>{
    switch(action.type){
        // case GET_DATA: 
        // return {
        //     ...state, data : state.data + action.payload
        // };
        case GET_DATA_SAGA: 
        return {
            ...state, data :action.data
        };
        default :
        return state;

    }
}

// const rootReducer = combineReducers({dataReducer});

export default dataReducer;