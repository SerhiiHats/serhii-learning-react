import React, {useState} from 'react';
import HeaderFunc from "../HeaderFunc/HeaderFunc";
import ListFunctionForComposition from "../ListFunctionForComposition/ListFunctionForComposition";
import styles from "./MainBoardToDoFunction.module.scss"

const MainBoardToDoFunction = () => {
  const [toDoComp, setToDoComp] = useState([]);

  function addItem(item){
    setToDoComp([item, ...toDoComp]);

  }

  function removeItem(id){

    const tempArr = toDoComp.filter( item => id !== item.id )
    setToDoComp(tempArr);
  }

  return (
    <div className={styles.containerToDo}>
      <HeaderFunc addItem={(v)=>addItem(v)}/>
      <ListFunctionForComposition items={toDoComp} removeItem={(v)=>removeItem(v)}/>
    </div>
  );
};

export default MainBoardToDoFunction;