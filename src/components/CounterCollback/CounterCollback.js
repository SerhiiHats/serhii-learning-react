import {Component} from "react";
import "./CounterCollback.css";

class CounterCollback extends Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState((state, props) => ({count: state.count + props.increment}))}>Increment
          </button>
          <span>{this.props.text}</span>
          <span>{this.state.count}</span>
        </div>
      </div>
    );
  }
}

export default CounterCollback;