import React, {useState} from 'react';
import styles from "./Auth.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {loginAC} from "./authActions";

const Auth = () => {


  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  console.log(auth)

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(loginAC());
    console.log(auth)
  }

  return (
    <div className={styles.containerForm}>

      <form className={styles.formAuth}>
        <h3>Please Authenticate</h3>
        <div className={styles.row}>
          <label>E-mail
            <input type={"email"} name={"email"} id={"email"} placeholder={"Enter your e-mail..."}/>
          </label>
        </div>
        <div className={styles.row}>
          <label>ім'я
            <input type={"text"} name={"name"} id={"name"} placeholder={"Enter your name..."}/>
          </label>
        </div>
        <div className={styles.row}>
          <input onClick={(e) => handleSubmit(e)} className={styles.btnSubmit} type={"submit"}
                 value={"Підтвердити"}/>
        </div>
      </form>

      <p style={{color:"black"}}>where: {auth ? "You are logged in!" : "You not auth!"}</p>

    </div>
  );
};

export default Auth;