import "./ListRedux.css"
import React, {Component} from 'react';
import {connect} from "react-redux";
import {ADD_ITEM, addITEM_creator, removeITEM_creator} from "./listAction";

class ListRedux extends Component {

  state = {
    text: "",
  }

  addTextToState(even) {
    this.setState({
      text: even.target.value
    });
  }

  cleanInput() {
    this.setState({text: ""});
  }

  render() {
    const {list, dispatch} = this.props;
    const liElement = list.map((elem, index) => {
      return <li className={"item-li-" + index} key={index}>{index} - {elem}</li>
    })

    return (
      <div className={"wrap-list"}>
        <ul className={"List"}>{liElement}</ul>
        <div className={"row-input-button"}>
          <input id={"text-to-add"} type={"text"} onChange={(e) => this.addTextToState(e)} value={this.state.text}
                 onKeyDown={
                   (e) => {
                     if (e.key !== "Enter") {
                       return;
                     }
                     dispatch(addITEM_creator(this.state.text));
                     // addHandlerList(this.state.text)
                     this.cleanInput();
                   }
                 }/>
          <button id={"bnt-add-text"} onClick={
            () => {
              dispatch(addITEM_creator(this.state.text));
              // addHandlerList(this.state.text);
              this.cleanInput();
            }
          }>ADD Item
          </button>
          <br/>
          <button id={"bnt-add-text"} onClick={
            () => {
              dispatch(removeITEM_creator());
              // addHandlerList(this.state.text);
              // this.cleanInput();
            }
          }>Remove Item
          </button>

        </div>
      </div>
    );
  }
}


const mapStateToProps = (store) => {
  console.log(store)
  return {
    list: store.list,
  }
}


export default connect(mapStateToProps)(ListRedux);  //HOC//high order component;

