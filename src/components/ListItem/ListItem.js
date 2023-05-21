import React from 'react';
import {Button} from "../Button/Button";
import {iconTypes} from "../../constants/icons";

const ListItem = (props) => {

  // const {item, removeItem} = props;
  const {key, id, elem, removeItem} = props;


  function onClickRemove(){
    removeItem(id);
  }

  return (
    <li className={"test5"} key={key} id={id}>
      {elem}
      <Button size={"small"} onClick={()=>onClickRemove()} iconType={iconTypes.cross}/>
    </li>
  )

};

export default ListItem;
