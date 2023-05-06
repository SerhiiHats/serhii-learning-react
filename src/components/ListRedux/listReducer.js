import initialStore from "../../redux/initialStore";
import {ADD_ITEM, REMOVE_ITEM} from "./listAction";

const listReducer = (list = initialStore.list, action) =>{
  switch (action.type){
    case ADD_ITEM:{
      return [...list, action.payload];
    }
    case REMOVE_ITEM:{
      // let tempArr = list.slice();
      // tempArr.pop();
      list.pop();
      return [...list];
    }
    default: {
      return list;
    }
  }
}


export default listReducer;