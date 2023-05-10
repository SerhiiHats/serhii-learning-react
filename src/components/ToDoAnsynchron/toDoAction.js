import axios from "axios";


export const TODO_LOADING_START = "TODO_LOADING_START";
export const TODO_LOADING_END = "TODO_LOADING_END";
export const GET_TODO_ITEM = "GET_TODO_ITEM";

export const toDoListAC = () =>{
  return (dispatch) =>{
    dispatch({
      type: TODO_LOADING_START
    })

    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response =>{
        dispatch({
          type:TODO_LOADING_END, payload: response.data
        })

      })





  }
}