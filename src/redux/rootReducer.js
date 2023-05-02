import { combineReducers } from "redux";
import titleReducer from "../components/Title/titleReducer";

export default combineReducers({
      title: titleReducer,
   },
);


