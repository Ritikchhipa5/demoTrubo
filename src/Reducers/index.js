import { combineReducers } from "redux";
import authReducer from "./user";
const Reducers = combineReducers({ authReducer: authReducer });

export default Reducers;
