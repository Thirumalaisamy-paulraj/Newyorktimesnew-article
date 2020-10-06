
import {applyMiddleware, combineReducers, createStore} from "redux";
import ReduxThunk from "redux-thunk";
import home from "../slice/homeSlice";
const middleware = () => {
    return applyMiddleware(ReduxThunk);
   
  };
  const pReducer =
    combineReducers({
   home});


export default createStore(pReducer,middleware());