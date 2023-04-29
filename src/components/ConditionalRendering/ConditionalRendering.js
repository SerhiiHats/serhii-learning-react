import {Component} from "react";
import "./ConditionalRendering.css";

class ConditionalRendering extends Component{
 messages = ["hello", "Hi, how are you", "Coll me"];
  // messages = []

  render() {
    return(
      <div>
        <span>Hello </span>
        {this.messages.length >0 && <span>, you have {this.messages.length} unread messages</span>}
      </div>
    )
  }
}

export default ConditionalRendering;