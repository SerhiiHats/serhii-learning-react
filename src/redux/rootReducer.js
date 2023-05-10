import {combineReducers} from "redux";
import titleReducer from "../components/Title/titleReducer";
import listReducer from "../components/ListRedux/listReducer";
import toDoReducer from "../components/ToDoAnsynchron/ToDoReducer";


export default combineReducers({
    title: titleReducer,
    list: listReducer,
    toDo : toDoReducer,
  },
);


