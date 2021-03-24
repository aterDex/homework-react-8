import * as types from './general-reducer-type';

const requestEngineer = (show = true) => {
    return {
        type: types.REQUEST_ENGINEER,
        value: show
    };
};

export {
    requestEngineer
}