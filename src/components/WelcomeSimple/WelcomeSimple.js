import { Component } from "react";
import "./WelcomeSimple.css";


class WelcomeSimple extends Component {
   render() {
      return <p className="welcome">Hello, {this.props.firstName || "everyone"}</p>;
   }
}

export default WelcomeSimple;

