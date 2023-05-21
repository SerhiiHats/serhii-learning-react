import React from 'react';
import ListItem from "../ListItem/ListItem";

const ListFunctionForComposition = (props) => {
  const {items, removeItem} = props;

  const elements = items.map(elem => {
    console.log("list " )
    console.log(items)
    console.log(elem)
    console.log(elem.value)
    console.log(elem.id)

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
    <ul className={"test7"}>
      {elements}
    </ul>
  );
};

export default ListFunctionForComposition;