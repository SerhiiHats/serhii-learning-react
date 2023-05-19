import React, {useEffect, useState} from 'react';
import styles from "./FuncComp.module.scss"

const FuncComp = (props) => {

  const [value, setValue] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString()); //если нужно доп переменные обьявляем ее и ее функцию обработчик в кортедже

  useEffect(()=>{
    let timeId =  setTimeout(()=>{
    setTime(new Date().toLocaleTimeString());
    }, 1000);                                           //componentDidUpdate()

    return ()=>{                                            //componentWillMount()
      clearTimeout(timeId);
    }
  });

  return (
    <div>
      <p>Hello from FuncComp</p>
      <p>{props.name}</p>
      <p>{value}</p>
      <button className={`${styles.btnCounter} ${styles.btnCounterFirst}`} onClick={()=>{
        setValue(value + 1)
      }}>++ counter From useState</button>
      <button className={`${styles.btnCounter} ${styles.btnCounterSecond}`} onClick={()=>{
        setValue(value - 1)
      }}>-- counter From useState</button>
      <button className={styles.btnCounter} onClick={()=>{
        setValue(0);
      }}>reset From useState</button>
      <p>time is: {time}</p>
    </div>
  );
};

export default FuncComp;