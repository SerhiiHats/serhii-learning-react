import initialStore from "../../redux/initialStore";
import {TODO_COMPLETED, TODO_ERROR, TODO_LOADING_END, TODO_LOADING_START} from "./toDoAsyncAction";

const toDoAsyncReducer = (toDo = initialStore.toDoItemFromStore, action) => {
     switch(action.type){
       case TODO_LOADING_START:{
         return {
           ...toDo,
           loading: true,
         }
       }
       case TODO_LOADING_END:{
         return {
           ...toDo,
           loading: false,
           itemsToDoFromStore: action.payload,
         };
       }
       case TODO_ERROR:{
         return {
           ...toDo,
           loading: false,
           error: "error",
         };
       }

       case TODO_COMPLETED:{
         const index = action.payload;
         const {itemsToDoFromStore} = toDo;

         const updateItems = [...itemsToDoFromStore];

         updateItems[index] = {
           ...updateItems[index],
           completed: !updateItems[index].completed,
         }

         return {
           ...toDo,
           itemsToDoFromStore: updateItems,
         };
       }

       default: return toDo;
  }
}
export default toDoAsyncReducer;