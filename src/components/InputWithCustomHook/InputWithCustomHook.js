import React, {useState} from 'react';
import useInput from "../hooks/useInput";

const InputWithCustomHook = () => {
  const [user, setUser] = useState("");

  const inputName = useInput("");
  const inputLastName = useInput("");

  const handelClick = () => {
    setUser(inputName.value + " " + inputLastName.value)
  }

  return (
    <div>
      <label>Name:
        <input type={"text"} {...inputName}/></label>
      <br/>
      <label>
        Last Name:
        <input type={"text"} {...inputLastName}/> </label>
      <br/>
      <button onClick={() => handelClick()}>Send name</button>
      <p>{user}</p>
    </div>
  );
};

export default InputWithCustomHook;