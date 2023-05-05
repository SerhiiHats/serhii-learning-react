import "./NameSelect.css";
import {Component} from "react";

class NameSelect extends Component{

  state = {
    value: "coconut",
  }

  handlerChange(e){
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <select value={this.state.value} onChange={(e)=>this.handlerChange(e)}>
        <option value={"grapefruit"}>Грейфрут</option>
        <option value={"lime"}>Лайм</option>
        <option value={"coconut"}>Кокос</option>
        <option value={"mango"}>Манго</option>
      </select>
    );
  }
}

export default NameSelect;