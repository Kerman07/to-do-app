import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import notificationReducer from "./reducers/notificationReducer";
import todoReducer from "./reducers/todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  todos: todoReducer,
  notification: notificationReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
