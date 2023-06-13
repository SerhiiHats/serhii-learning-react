import {combineReducers} from "redux";
import titleReducer from "../components/Title/titleReducer";
import listReducer from "../components/ListRedux/listReducer";
import toDoAsyncReducer from "../components/ToDoAnsynchron/ToDoAsyncReducer";
import counterReducer from "../components/CounterRedux/counteReducer";
import postAsyncReducer from "../components/PostAsynchronous/postAsyncReducer";
import countReducerForFuncComp from "../components/FuncCompCountRedux/countReducerForFuncComp";
import authReducer from "../components/Auth/authReducer";


export default combineReducers({
    title: titleReducer,
    list: listReducer,
    postsFromStore: postAsyncReducer,
    toDoItemFromStore: toDoAsyncReducer,
    counterFR: counterReducer,
    postsFR: postAsyncReducer,
    countForFuncComp: countReducerForFuncComp,
    auth: authReducer,
  },
);


