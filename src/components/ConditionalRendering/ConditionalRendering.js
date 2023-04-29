import {Component} from "react";
import "./ConditionalRendering.css";
import Counter from "../Counter/Counter";
import like_1 from "../../images/like_1.svg"
import like_2 from "../../images/like_2.svg"

class ConditionalRendering extends Component {
  messages = ["hello", "Hi, how are you", "Coll me"];
  // messages = []
  state = {
    counterVisible: true,
    visibleImg: false,
  }

  render() {
    return (
      <div className={"ConditionalRendering"}>
        <span>Hello </span>
        {this.messages.length > 0 && <span>, you have {this.messages.length} unread messages</span>}
        <div className={"visible-counter"}>
          <button onClick={() => this.setState({counterVisible: !this.state.counterVisible})}>Visible Of Counter
          </button>
        </div>
        {this.state.counterVisible && <Counter/>}
        <div className={"visible-likes"}>
          <button onClick={() => this.props.handlerVisibleProps()}>unwatch likes with Parent</button>
        </div>
        {this.props.visibleProps &&
          <div className={"like"} onClick={() => {
            this.setState((state) => ({visibleImg: !state.visibleImg}))
          }}>
            <img src={this.state.visibleImg ? like_2 : like_1} alt={"like"}/>
          </div>
        }

      </div>
    )
  }
}

export default ConditionalRendering;