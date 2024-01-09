import { combineReducers } from "redux";
import userReducer from "./userReducer";
import dataCoinReducer from "./dataCoinReducer";
import dateReducer from "./dateReducer";
export const rootReducer = combineReducers({
  userReducer,
  dataCoinReducer,
  dateReducer,
});
