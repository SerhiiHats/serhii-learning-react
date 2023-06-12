import React from 'react';
import styles from "./Auth.module.scss"

const Auth = () => {
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
          <input onClick={(e) => e.preventDefault()} className={styles.btnSubmit} type={"submit"}
                 value={"Підтвердити"}/>
        </div>
      </form>
    </div>
  );
};

export default Auth;