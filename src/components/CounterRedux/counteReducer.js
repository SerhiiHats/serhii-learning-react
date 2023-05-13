import {DECREMENT, INCREMENT, RESET, RND} from "./counterReduxAction";
import initialStore from "../../redux/initialStore";

const counterReducer = (counterFR = initialStore.counterFR, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {...counterFR, count: counterFR.count + 1};
    }
    case DECREMENT: {
      return {...counterFR, count: counterFR.count - 1};
    }
    case RND: {
      const rnd = Math.ceil(Math.random() * 100);
      return {...counterFR, count: rnd}
    }
    case RESET: {
      return {...counterFR, count: 0};
    }
    default:
      return counterFR;
  }
}

export default counterReducer;