import axios from "axios";

export const LOADING_START = "LOADING";
export const LOADING_END = "LOADING_END";
export const LOADING_ERROR = "LOADING_ERROR";

export function LoaderAction() {
  return (dispatch) => {
    dispatch({type: LOADING_START});

    axios("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        dispatch({
          type: LOADING_END,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: LOADING_ERROR
        });
      })

  }
}