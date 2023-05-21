import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";
import {iconTypes} from "../../constants/icons";

const FormFunc = (props) => {

  const [valueInput, setvalueInput] = useState("");

  useEffect(() => {
    document.forms.listTask.elements[0].focus();
  })

  function handlerValue(e) {
    console.log("From form for list: " + e.target.value);
    setvalueInput(e.target.value)
  }

  function handlerSubmit(e) {
    e.preventDefault();
    const {addItem} = props;
    if (!valueInput) {
      return;
    }
    const tempValueInput = valueInput.trim();
    if (tempValueInput.length) {
      console.log(tempValueInput)
      console.log(Date.now())
      addItem({value: tempValueInput, id: Date.now()})
      setvalueInput("");
    }
  }


  return (
    <form id={"toDolistTask"} name={"listTask"} onSubmit={(e) => handlerSubmit(e)}>
    {/*<form>*/}
      <div className={"test"}>
        <input type={"text"} placeholder={"add new task"} className={"test2"} onChange={(e) => handlerValue(e)}
               value={valueInput}/>
        <Button type={"submit"} iconType={iconTypes.plus} className={"test3"}>Add</Button>
      </div>
    </form>
  );
};

export default FormFunc;