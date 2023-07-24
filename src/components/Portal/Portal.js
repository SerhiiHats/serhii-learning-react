import {Component} from 'react';
import ReactDOM from "react-dom";

class Portal extends Component {

  constructor(props) {
    super(props);
    this.modal = document.getElementById("modal");
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "";
  }

  render() {
    return ReactDOM.createPortal(super.children, this.modal);
  }
}

export default Portal;