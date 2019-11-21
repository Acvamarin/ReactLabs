import { createStore, combineReducers, applyMiddleware, compose  } from "redux";
import thunk from 'redux-thunk';
import usersReducer from "./users-reducer";
let reducers = combineReducers({
  usersPage: usersReducer,
  
},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
let store = createStore(reducers);
export default store;