import "./ToDoFromState.scss"

import React, {Component} from 'react';
import axios from "axios";
import Loader from "../Loader/Loader";

class ToDoFromState extends Component {
  state = {
    toDoFromState: [],
    visible: true,
  }

  handlerTodo(e) {
    const index = e.target.id - 1;
    const tempArr = [...this.state.toDoFromState];
    tempArr[index].completed = !tempArr[index].completed;
    this.setState({toDoFromState: tempArr});
  }


  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        this.setState({toDoFromState: response.data})
      })
    // console.log(response.data))
  }

  render() {
    const todo = this.state.toDoFromState;
    const itemsToDo = todo.map((item) => {
      return <p onClick={(e)=>{
        this.handlerTodo(e)}
      }  className={item.completed ? "rowTodo listCompleted" : "rowTodo listUncompleted"}
                key={item.id} id={item.id}>{item.id} - {item.title}</p>
    })
    return (
      <div className={"containerToDo"}>
        <div className={"viewLoader"}>{!todo && <Loader/>}</div>
        <button className={"btnForView"} onClick={() => this.setState({visible: !this.state.visible})}>Показать/скрыть</button>
        {this.state.visible && itemsToDo}
      </div>
    );
  }
}

export default ToDoFromState;