import {Component} from "react";
import "./Header.css"
import Title from "../Title/Title";


class Header extends Component {
  render() {
    const { aboutTask, descriptionTask } = this.props;
    return (
      <header className="Header">
        <Title title={"From Header"}/>
        <h1>{aboutTask || "aboutTask"}</h1>
        <p>{descriptionTask || "descriptionTask"}</p>
      </header>
    );
  }
}

export default Header;