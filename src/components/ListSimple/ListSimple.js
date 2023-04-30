import {Component} from "react";
import "./ListSimple.css";
import {v4 as uuidv4} from "uuid";
//
class ListSimple extends Component {

  state = {
    list1: ["Список", "не поступал", "на рендеринг элементов"],
    list2: ["nothing"],
    list3: [""],
  }

  render() {
    const {listItem} = this.props;
    const items = listItem || this.state.list1;
    const list = items.map((element, index) => <li id={"item-of-list-" + index} key={uuidv4()}>{element}</li>);

    return (
      <ul className={"ListSimple"}>
        {list}
      </ul>
    )
  }
}

export default ListSimple;