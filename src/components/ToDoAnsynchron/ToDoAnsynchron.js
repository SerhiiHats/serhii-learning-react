import React, {Component} from 'react';
import {connect} from "react-redux";
import {toDoListAction, toDoListCompletedAction} from "./toDoAsyncAction";
import styles from "./ToDoAnsynchron.module.scss";
import Loader from "../Loader/Loader";

class ToDoAnsynchron extends Component {

  state = {
    visible: false,
  }

  handlerTodo(e) {
    const index = e.target.id - 1;
    const {dispatch} = this.props;
    dispatch(toDoListCompletedAction(index));
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(toDoListAction());
  }

  render() {
    const {toDo} = this.props;

    const items = toDo.itemsToDoFromStore.map(elem =>{
      return <p onClick={(e)=>{
        this.handlerTodo(e)}
      }  className={`${elem.completed ? styles.listCompleted : styles.listUncompleted} ${styles.rowTodo}` }
                key={elem.id} id={elem.id}>{elem.id} - {elem.title}</p>
    });

    return (
      <div className={styles.containerToDo}>
        <div className={styles.viewLoader}>{toDo.loading && <Loader/>}</div>
        <button className={styles.btnForView} onClick={() => this.setState({visible: !this.state.visible})}>Показать/скрыть</button>
        {this.state.visible && items}
      </div>
    );
  }
}

const mapStateToProps = (store) =>{
  return {
    toDo: store.toDoItemFromStore,
  }
}

export default connect(mapStateToProps)(ToDoAnsynchron) ;