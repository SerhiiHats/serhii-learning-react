import React, {Component} from 'react';
import "./CounterRedux.scss"
import {connect} from "react-redux";
import {IncActCreator, INCREMENT} from "./counterReduxAction";

class CounterRedux extends Component {

  state = {
    count: 0,
    arrayOfColor: ["red", "black", "green"],
    index: 1,
    visible: true,
    timeUpdate: 0
  }

  handlerCounter(operand = 1) {
    let index = (operand === -1) ? 0
      : (operand === this.state.count * -1) ? 1 : 2;

    //рекомендуемый вариант
    this.setState((state)=>({
      index: index,
      count: state.count + operand,
      timeUpdate: new Date(),
    }));

    setTimeout(() => {
      this.setDefaultColor();
    }, 1500);

  }

  setDefaultColor() {
    if ((new Date() - this.state.timeUpdate) > 1000) {
      this.setState({
        index: 1
      });
    }
  }

  render() {
    const {countFR, dispatch} = this.props;
    console.log(this.props)
    console.log(countFR)
    console.log(countFR.count)

    return (
      <div className="counter-redux">
        {/*<button>Visible</button>*/}
        <div>
          <button onClick={() => this.handlerCounter()}>Incriment</button>
          <button onClick={() => this.handlerCounter(-1)}>Decrement</button>
          <button onClick={() => this.handlerCounter(this.state.count * -1)}>Reset</button>
          <span style={{color: this.state.arrayOfColor[this.state.index]}}>{this.state.count}</span>
        </div>
        <div>
          <button onClick={() => dispatch(IncActCreator(INCREMENT))}>++Redux</button>
          <button onClick={() => dispatch(IncActCreator(INCREMENT))}>--Redux</button>
          <button onClick={() => this.handlerCounter(-1)}>RND Redux</button>
          <button onClick={() => this.handlerCounter(this.state.count * -1)}>Reset Redux</button>
          <span>{countFR.count}</span>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (store)=>{
  console.log(store)
  return{
    countFR: store.countFR
  }
}

export default connect(mapStateToProps)(CounterRedux);

