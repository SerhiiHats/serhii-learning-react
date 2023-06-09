import {Component} from "react";


class Clock extends Component {


  state = {
    date: new Date(),
    arrayColor: ["red", "violet", "grey", "blue", "green", "black", "indigo", "yellow", "orange", "aquamarine", "brown", "cornflowerblue"],
    color: "red",
    index: 0,
    colorRnd: "blue",
  }


  // constructor(props) {
  //    super(props)
  // this.state = { date: new Date() }
  // }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.setColor();
        this.tick();
        this.setColorRandom();
      },
      1000
    );
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  setColor() {
    this.setState(
      {
        index: (this.state.index + 1) % this.state.arrayColor.length,
        color: this.state.arrayColor[this.state.index],
      }
    )
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  setColorRandom() {
    this.setState(
      {
        colorRnd: getColorRandom(),
      }
    );

    function getColorRandom() {
      let rnd = () => Math.floor(Math.random() * 256);
      return `rgb(${rnd()}, ${rnd()}, ${rnd()})`;
    }
  }


  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>Now is <span style={{color: this.state.color}}> {this.state.date.toLocaleTimeString()}</span> (color from
          array)</h2>
        <h2>Now is <span style={{color: this.state.colorRnd}}> {this.state.date.toLocaleTimeString()}</span> (color from
          random)</h2>
      </div>
    );
  }
}

export default Clock;