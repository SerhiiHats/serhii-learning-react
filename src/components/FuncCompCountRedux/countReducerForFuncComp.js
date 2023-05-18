import initialStore from "../../redux/initialStore";
import {DECREMENT, INCREMENT, RESET, RND} from "./countReduxActionForFuncComp";

const countReducerForFuncComp = (count = initialStore.countForFuncComp, action) => {
  switch (action.type) {
    case INCREMENT: {
      return count + 1;
    }
    case DECREMENT: {
      return count - 1;
    }
    case RND: {
      // const rnd = Math.ceil(Math.random() * 100);
      return Math.ceil(Math.random() * 100);
    }
    case RESET: {
      return 0;
    }
    default:
      return count;
  }
}

export default countReducerForFuncComp;