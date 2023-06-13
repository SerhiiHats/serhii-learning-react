import React, {useState} from 'react';
import styles from "./Auth.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {loginAC, logoutAC} from "./authActions";

const Auth = () => {


  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  console.log(auth)

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(loginAC());
    console.log(auth)
  }

  const handleSubmitLogout = (e) => {
    e.preventDefault();
    dispatch(logoutAC());
    console.log(auth)
  }

  const isAuth = auth ? "You are logged in!" : "You not auth!"

  return (
    <div className={styles.containerForm}>
      <p className={styles.isAuth}>where: {isAuth}</p>

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
          {auth ? <input onClick={(e) => handleSubmitLogout(e)} className={styles.btnSubmit} type={"submit"}
                         value={"log Out"}/> :
            <input onClick={(e) => handleSubmitLogin(e)} className={styles.btnSubmit} type={"submit"}
                   value={"log In"}/>}
        </div>
      </form>

      <p className={styles.isAuth}>where: {isAuth}</p>

    </div>
  );
};

export default Auth;