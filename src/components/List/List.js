import {Component} from "react";
// import {v4 as uuidv4} from 'uuid';
import "./List.css"

class List extends Component {

  state = {
    text: ""
  }

  addTextToState(even) {
    console.log(even.target.value)
    this.setState({
      text: even.target.value
    });
  }

  cleanInput(e){
    console.log("2-qrkbr", e.target)
  }
  cleanInput(even){
    console.log(even.target.value)

  }

  render() {
    const {arrayForList, addHandlerList} = this.props;

    console.log("from list", arrayForList)

    const liElement = arrayForList.map((elem, index) => {
      return <li className={"item-li-" + index} key={index}>{index} - {elem}</li>
    })

    return (
      <div className={"wrap-list"}>
        <ul className={"List"}>
          {liElement}<
          /ul>
        <div className={"row-input-button"}>
          <input id={"text-to-add"} type={"text"} onChange={(e) => this.addTextToState(e)}/>
          <button id={"bnt-add-text"} onClick={() => {addHandlerList(this.state.text)}} onClick={(e) =>this.cleanInput(e)}>ADD To Do
          </button>
        </div>
      </div>

    );
  }
}

export default List;