import {Component} from "react";
import "./Counter.css";

class Counter extends Component {
timeId = 0;

  state = {
    count: 0,
    color: "black",
    arrayOfColor: ["red", "black", "green"],
    index: 1,
    // ddd: 1,
  }

  handlerCounter(operand = 1) {
    let index = (operand === -1) ? 0 : (operand ===
      this.state.count * -1) ? 1 : 2;
    this.setState({
      index: index,
      count: this.state.count + operand,
      // ddd: new Date(),
    })

    console.log(new Date().toLocaleTimeString() )
    console.log(new Date().toLocaleDateString());
    let d = new Date().toLocaleDateString();
    let t = new Date().toLocaleTimeString();

    let ad = d.split("\.");
    console.log('ad:',ad);
    let at = t.split(":");
    console.log('at:',at);
    ad.concat(at);

    console.log(ad);


    console.log(`${ad[0]}:${ad[1]}:${ad[2]}:${at[0]}:${at[1]}:${at[2]}`);
    console.log(new Date().toLocaleDateString() + `:${at[0]}:${at[1]}:${at[2]}`);
    // this.timeId = setTimeout(this.setDefaultColor, 4000);
  }

  index = 1;

  setDefaultColor() {
    if ((new Date()- this.state.ddd) > 3500) {
      this.setState({
        index: 1
      });
    }
  }

  render() {
    return (
      <div className="Counter">
        <button onClick={() => this.handlerCounter()}>Incriment</button>
        <button onClick={() => this.handlerCounter(-1)}>Decrement</button>
        <button onClick={() => this.handlerCounter(this.state.count * -1)}>Reset</button>
        <span style={{color: this.state.arrayOfColor[this.state.index]}}>{this.state.count}</span>
      </div>
    );
  }

}

export default Counter;