import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import usersReducer from "./users-reducer";
import  loginReducer  from "./login-reducer";
let reducers = combineReducers({
  usersPage: usersReducer,
  loginPage: loginReducer
},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
let store = createStore(reducers);
export default store;