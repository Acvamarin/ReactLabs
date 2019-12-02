import { createStore, combineReducers  } from "redux";
import usersReducer from "./users-reducer";
import  loginReducer  from "./login-reducer";
let reducers = combineReducers({
  usersPage: usersReducer,
  loginPage: loginReducer
});
let store = createStore(reducers);
export default store;