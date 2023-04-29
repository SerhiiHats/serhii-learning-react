import {Component} from "react";
import "./CounterSimple.css";

class CounterSimple extends Component {

  state = {
    count: 0,
  }

  render() {
    return (
      <div>

          <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
          <span>{this.props.text}</span>
          <span>{this.state.count}</span>
      
        {/*<div>*/}
        {/*  <button onClick={() => this.setState((state, props) => ({count: state.count + props.increment}))}>Increment*/}
        {/*  </button>*/}
        {/*  <span>{this.props.text}</span>*/}
        {/*  <span>{this.state.count}</span>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default CounterSimple;