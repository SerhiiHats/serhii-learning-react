import React, {useState} from 'react';
import HeaderFunc from "../HeaderFunc/HeaderFunc";
import ListFunctionForComposition from "../ListFunctionForComposition/ListFunctionForComposition";

const ListComposition = () => {
  const [toDoComp, setToDoComp] = useState([]);

  //item = {value, uuid}
  function addItem(item){
    setToDoComp([item, ...toDoComp]);
    console.log(item)
  }

  function removeItem(id){
    const tempArr = toDoComp.filter( item => id !== item.id )
    setToDoComp(tempArr);
  }

  return (
    <div>
      <HeaderFunc addItem={(v)=>addItem(v)}/>
      <ListFunctionForComposition items={toDoComp} removeItem={()=>removeItem()}/>


    </div>
  );
};

export default ListComposition;