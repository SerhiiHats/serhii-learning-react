import initialStore from "../../redux/initialStore";
import {LOADING_END, LOADING_ERROR, LOADING_START} from "./asyncAction";

export default function postAsyncReducer(postsFromStore = initialStore.postsFromStore, action) { //{type, error, payload},
  switch (action.type) {

    case LOADING_START: {
      return {...postsFromStore, loading: true,};
    }
    case  LOADING_END: {
      return {...postsFromStore, loading: false, postItems: action.payload,};
    }
    case LOADING_ERROR: {
      return {...postsFromStore, loading: false, error: "error"}
    }

    default: {
      return postsFromStore;
    }
  }
}