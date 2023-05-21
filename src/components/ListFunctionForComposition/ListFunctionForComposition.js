import React from 'react';
import ListItem from "../ListItem/ListItem";
import styles from "./ListFunctionForComposition.module.scss";

const ListFunctionForComposition = (props) => {
  const {items, removeItem} = props;

  const elements = items.map(elem => {
    return (
      <ListItem
        key={elem.id}
        id={elem.id}
        elem={elem.value}
        removeItem={removeItem}
      />
    );
  });
  return (
    <ul className={styles.containerTask}>
      {elements}
    </ul>
  );
};

export default ListFunctionForComposition;