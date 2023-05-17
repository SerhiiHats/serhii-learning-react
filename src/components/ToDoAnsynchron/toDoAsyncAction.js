import axios from "axios";


export const TODO_LOADING_START = "TODO_LOADING_START";
export const TODO_LOADING_END = "TODO_LOADING_END";
export const TODO_ERROR = "TODO_ERROR";
export const TODO_COMPLETED = "TODO_COMPLETED";

export const toDoListAction = () =>{
  return (dispatch) =>{
    dispatch({
      type: TODO_LOADING_START
    })

    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response =>{
        dispatch({
          type:TODO_LOADING_END, payload: response.data
        });
      })
  }
}

export const toDoListCompletedAction = (index) =>{
  return{
    type: TODO_COMPLETED,
    payload: index,
  }
}

