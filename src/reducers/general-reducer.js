import * as types from './general-reducer-type';

const initialState = {
    showRequestEngineer: false
}

const generalReducer = (state = initialState, action) => {
    console.log("event: ", state, "====", action);
    const {type, value} = action;
    switch (type) {
        case types.REQUEST_ENGINEER:
            return {
                ...state,
                showRequestEngineer: value
            };
        default:
            return state;
    }
}

export default generalReducer;