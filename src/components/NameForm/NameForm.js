import "./NameForm.css"
import {Component} from "react";

class NameForm extends Component{

  state = {
    value: "",
  }

  handlerChange(event){
    this.setState({value: event.target.value});
  }

  handlerSubmit(event){
    event.preventDefault();
    alert("name is: " + this.state.value);
  }

  render() {
    return (
      <form onSubmit={(ss)=>this.handlerSubmit(ss)} className={"NameForm"}>
        <label>
          Имя:
          <input type={"text"} name={"name"} onChange={(e)=>this.handlerChange(e)} value={this.state.value}/>
        </label>
        <br/>
        <textarea onChange={(e)=>this.handlerChange(e)} value={this.state.value}/>
        <br/>
        <input className={"Submit"} type={"submit"} value={"Отправить"} />
      </form>
    );
  }

}

export default NameForm;