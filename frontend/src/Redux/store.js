import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./reducers";

const rootReducers = combineReducers({
  user: userReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));