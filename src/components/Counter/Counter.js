import {Component} from "react";
import "./Counter.css";

class Counter extends Component {
  timeUpdate;

  state = {
    count: 0,
    color: "black",
    arrayOfColor: ["red", "black", "green"],
    index: 1,
    visible: true,
  }

  handlerCounter(operand = 1) {
    let index = (operand === -1) ? 0
      : (operand === this.state.count * -1) ? 1 : 2;

    this.setState({
      index: index,
      count: this.state.count + operand,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.timeUpdate = new Date();
    setTimeout(() => {
      this.setDefaultColor()
    }, 2000);
  }

  setDefaultColor() {
    if ((new Date() - this.timeUpdate) > 1500) {
      this.setState({index: 1});
    }
  }

  render() {
    return (
      <div className="Counter">
        {/*<button>Visible</button>*/}
        <button onClick={() => this.handlerCounter()}>Incriment</button>
        <button onClick={() => this.handlerCounter(-1)}>Decrement</button>
        <button onClick={() => this.handlerCounter(this.state.count * -1)}>Reset</button>
        <span style={{color: this.state.arrayOfColor[this.state.index]}}>{this.state.count}</span>
      </div>
    );
  }
}

export default Counter;