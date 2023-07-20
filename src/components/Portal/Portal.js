import React, {Component} from 'react';

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
    return ReactDOM.createPortal(this.props.children, this.modal);
  }
}

export default Portal;