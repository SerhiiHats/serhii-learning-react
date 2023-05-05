import "./NotControlForm.css";
import React, {Component} from "react";

class NotControlForm extends Component {

input = React.createRef()

  handlerSubmit(event) {
    event.preventDefault();
    alert("name is: " + this.input.current.value);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handlerSubmit(e)} className={"NameForm"}>
        <label>
          Имя:
          <input type={"text"} name={"name"} ref={this.input}/>
        </label>
        <input className={"Submit"} type={"submit"} value={"Отправить"}/>
      </form>
    );
  }
}

export default NotControlForm;