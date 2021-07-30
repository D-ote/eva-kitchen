import { combineReducers } from "redux";
import authReducer from "./loginReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
})