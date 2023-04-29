import {Component} from "react";
import "./ConditionalRenderingTernary.css"

class ConditionalRenderingTernary extends Component{
  messages = ["hello", "Hi, how are you", "Coll me", "Super write me", "I am angry"];
  // messages = []

  countMessage = this.props.countMessage || this.messages.length;

  render() {
    return(
      <div>
        <span>Hello </span>
        {this.countMessage > 0
        ?  <span>, you have {this.countMessage} unread messages</span>
        :  <span>, you don't have messages</span> }
      </div>
    )
  }
}

export default ConditionalRenderingTernary;