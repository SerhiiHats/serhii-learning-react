import {Component} from "react";
import "./ChangeColorText.css"


class ChangeColorText extends Component {
  state = {
    arrayColor: ["red", "violet", "grey", "blue", "green", "black", "indigo", "yellow", "orange", "aquamarine", "brown", "cornflowerblue"],
    index: 0,
    color: "blue",
  }

  setColor() {
    this.setState({
      color: this.getColorRandom()
    });
  }

  getColorRandom() {
    let rnd = () => Math.floor(Math.random() * 256);
    return `rgb(${rnd()}, ${rnd()}, ${rnd()})`;
  }

  setIndexOfArrayColor(){
    this.setState( (state)=>({index: (state.index + 1) % state.arrayColor.length}));
  }

  render() {
    return (
      <div className={"ChangeColorText"}>
        <div onClick={() => this.setColor()} >
          <p style={{color: this.state.color}}>Click me and change my color text by Random</p>
        </div>
        <div onClick={() => this.setIndexOfArrayColor()} className={"ChangeColorText"}>
          <p style={{color: this.state.arrayColor[this.state.index]}}>Click me and change my color text by ArrayOfColor</p>
        </div>
      </div>
    );
  }
}
export default ChangeColorText;