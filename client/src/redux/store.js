import { createStore, applyMiddleware, compose } from "redux";
import { middleWare, apiReducer } from "redux-rails";
import { apiConfig } from "../config";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  apiReducer(apiConfig),
  {},
  composeEnhancers(applyMiddleware(middleWare(apiConfig)))
);
export default store;
