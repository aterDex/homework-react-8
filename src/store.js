import {createStore} from "redux";
import {generalReducer} from "./reducers";

const store = createStore(generalReducer);

export default store;