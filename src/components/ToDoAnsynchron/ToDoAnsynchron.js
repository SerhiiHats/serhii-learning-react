import React, {Component} from 'react';
import store from "../../redux/configStore";
import {connect} from "react-redux";
import {toDoListAC} from "./toDoAction";

class ToDoAnsynchron extends Component {

  componentDidMount() {
    this.props.dispatch(toDoListAC())
  }

  render() {

    // const itemsMap = this.props.
    console.log(store)
    // const {toDo} = this.props
    console.log(this.props)
    return (
      <div>
        List

      </div>
    );
  }
}

const mapStateToProps = (store) =>{
  return {
    toDo: store.toDoItemFromStore
  }
}

export default connect(mapStateToProps)(ToDoAnsynchron) ;