
import { CHANGE_TITLE } from "./action";
import initialStore from "../../redux/initialStore";
const titleReducer = (title = initialStore.title, action) =>{
  switch (action.type){
    case CHANGE_TITLE:{
      // return "Redux it'so easy!!!"
      return action.payload
    }
    default: {
      return title;
    }
  }
}


export default titleReducer;