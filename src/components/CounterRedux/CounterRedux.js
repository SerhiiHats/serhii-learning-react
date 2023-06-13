import React, {Component} from 'react';
import "./CounterRedux.scss"
import {connect} from "react-redux";
import {
  DecActCreator,
  DECREMENT,
  IncActCreator,
  INCREMENT,
  RESET,
  ResetActCreator, RND,
  RndActCreator
} from "./counterReduxAction";

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
    return (
      <div className="counter-redux">
        <button onClick={()=>{this.setState({visible: !this.state.visible})}}>Скрить/Показать</button>
        {this.state.visible &&
          <div>
          <button onClick={() => this.handlerCounter()}>Incriment</button>
          <button onClick={() => this.handlerCounter(-1)}>Decrement</button>
          <button onClick={() => this.handlerCounter(this.state.count * -1)}>Reset</button>
          <span style={{color: this.state.arrayOfColor[this.state.index]}}>{this.state.count}</span>
        </div>
        }
        {this.state.visible &&
          <div>
          <button onClick={() => dispatch(IncActCreator(INCREMENT))}>++Redux</button>
          <button onClick={() => dispatch(DecActCreator(DECREMENT))}>--Redux</button>
          <button onClick={() => dispatch(RndActCreator(RND))}>RND Redux</button>
          <button onClick={() => dispatch(ResetActCreator(RESET))}>Reset Redux</button>
          <span style={{color: countFR.arrayOfColor[countFR.index]}}>{countFR.count}</span>
        </div>
        }

      </div>
    );
  }
}

const mapStateToProps = (store)=>{
  return{
    countFR: store.counterFR
  }
}

export default connect(mapStateToProps)(CounterRedux);

