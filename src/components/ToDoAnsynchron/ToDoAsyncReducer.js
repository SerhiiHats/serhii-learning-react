import initialStore from "../../redux/initialStore";
import {TODO_COMPLETED, TODO_ERROR, TODO_LOADING_END, TODO_LOADING_START} from "./toDoAsyncAction";

const toDoAsyncReducer = (toDoItemFromStore = initialStore.toDoItemFromStore, action) => {
     switch(action.type){
       case TODO_LOADING_START:{
         return {
           ...toDoItemFromStore,
           loading: true,
         }
       }
       case TODO_LOADING_END:{
         return {
           ...toDoItemFromStore,
           loading: false,
           itemsToDoFromStore: action.payload,
         };
       }
       case TODO_ERROR:{
         return {
           ...toDoItemFromStore,
           loading: false,
           error: "error",
         };
       }

       case TODO_COMPLETED:{
         const index = action.payload;
         const {itemsToDoFromStore} = toDoItemFromStore;

         const updateItems = [...itemsToDoFromStore];

         updateItems[index] = {
           ...updateItems[index],
           completed: !updateItems[index].completed,
         }

         return {
           ...toDoItemFromStore,
           itemsToDoFromStore: updateItems,
         };
       }

       default: return toDoItemFromStore;
  }
}
export default toDoAsyncReducer;