import {INCREMENT} from "./counterReduxAction";
import initialStore from "../../redux/initialStore";
// import store from "../../redux/configStore";

const counterReducer = (counterFR = initialStore.counterFR, action)=>{
  console.log(counterFR)
  // console.log(counterFR.counterFR)
  // console.log(counterFR.counterFR.count)
  switch (action.type){
    case INCREMENT:{
      // counterFR.count = counterFR.count + 1;
      return {...counterFR, count: counterFR.count+1 };
        // count: count + 1,
        // // count: count + 1,
        // counterFR: {

        //   arrayOfColor: ["red", "black", "green"],
        //   index: 1,
        //   visible: true,
        //   timeUpdate: 0
        // // }

    }
    default: return counterFR;
      // counterFR: counterFR


  }
}

export default counterReducer;