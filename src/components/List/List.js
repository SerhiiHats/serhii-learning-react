import {Component} from "react";
// import {v4 as uuidv4} from 'uuid';
import "./List.css"

class List extends Component {

  state = {
    text: ""
  }

  addTextToState(even) {
    this.setState({
      text: even.target.value
    });
  }

  cleanInput(){
    this.setState({text: ""});
  }

  render() {
    const {arrayForList, addHandlerList} = this.props;
    const liElement = arrayForList.map((elem, index) => {
      return <li className={"item-li-" + index} key={index}>{index} - {elem}</li>
    })

    return (
      <div className={"wrap-list"}>
        <ul className={"List"}>
          {liElement}<
          /ul>
        <div className={"row-input-button"}>
          <input id={"text-to-add"} type={"text"} onChange={(e) => this.addTextToState(e)} value={this.state.text} onKeyDown={
            (e) =>{
            if(e.key !=="Enter"){
              return;
            }
            addHandlerList(this.state.text)
            this.cleanInput();
          }
          }/>
          <button id={"bnt-add-text"} onClick={
            () => {
              addHandlerList(this.state.text);
              this.cleanInput();
            }
          } >ADD To Do
          </button>
        </div>
      </div>
    );
  }
}

export default List;