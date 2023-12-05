import { combineReducers } from "redux";
import productReducer from "./reducer";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
