import {combineReducers} from "redux";
import titleReducer from "../components/Title/titleReducer";
import listReducer from "../components/ListRedux/listReducer";
import toDoReducer from "../components/ToDoAnsynchron/ToDoReducer";
import counterReducer from "../components/CounterRedux/counteReducer";


export default combineReducers({
    title: titleReducer,
    list: listReducer,
    toDo: toDoReducer,
    countFR: counterReducer,
  },
);


