import initialStore from "../../redux/initialStore";
import {TODO_LOADING_END, TODO_LOADING_START} from "./toDoAction";

const toDoReducer = (toDo = initialStore.toDoItemFromStore, action) => {
     switch(action.type){
       case TODO_LOADING_START:
         return {
           ...toDo,
           loading: true,
         }
       case TODO_LOADING_END:
         return {
           ...toDo,
           loading: false,
           toDo: action.payload,
         }
       default: return toDo
  }
}

export default toDoReducer;