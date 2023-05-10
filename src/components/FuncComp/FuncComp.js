import React, {useState} from 'react';

const FuncComp = (props) => {
  const [value, setValue] = useState("")
  return (
    <div>
      <p>Hello from FuncComp</p>
      <p>{props.name}</p>
      <p>{value}</p>
      <button onClick={()=>{
        setValue("fromUseState")
      }}>OnClick</button>
    </div>
  );
};

export default FuncComp;