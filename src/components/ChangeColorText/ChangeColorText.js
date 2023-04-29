import {Component} from "react";
import "./ChangeColorText.css"


class ChangeColorText extends Component {
  // arrayColor = ["red", "violet", "grey", "blue", "green", "black", "indigo", "yellow", "orange", "aquamarine", "brown", "cornflowerblue"]

  state = {
    arrayColor: 0,
    index: 0,
    color: "black",
    text: "Компоненту вообще ничего не передавали",
  }

  setColor() {
    if (this.state.arrayColor){
      // setIndexOfArrayColor() {
      this.setState((state) => ({
        index: (state.index + 1) % state.arrayColor.length,
        color: state.arrayColor[state.index],
      }));

      // }
    } else {
      this.setState({
        color: this.getColorRandom()
      });
    }

  }

  getColorRandom() {
    let rnd = () => Math.floor(Math.random() * 256);
    return `rgb(${rnd()}, ${rnd()}, ${rnd()})`;
  }

  componentDidMount() {
    const {arrayColor, color} = this.props;
    this.setState({
      arrayColor: arrayColor || 0,
      color: color || this.state.color,
    });
  }





  render() {
    const {text} = this.props;
    return (
      <div className={"ChangeColorText"}>
        <div onClick={() => this.setColor()}>
          <p style={{color: this.state.color}}>{text || this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default ChangeColorText;