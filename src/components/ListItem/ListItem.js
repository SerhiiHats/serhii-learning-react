import React from 'react';
import {Button} from "../Button/Button";
import {iconTypes} from "../../constants/icons";
import styles from "./ListItem.module.scss"

const ListItem = (props) => {

  const {key, id, elem, removeItem} = props;

  function onClickRemove() {
    removeItem(id);
  }

  return (
    <li className={styles.containerItem} key={key} id={id}>
      {elem}
      <Button size={"small"} onClick={() => onClickRemove()} iconType={iconTypes.cross}/>
    </li>
  )

};

export default ListItem;
