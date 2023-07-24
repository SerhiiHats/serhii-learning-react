import styles from "./Modal.module.scss";

import React from 'react';
import Portal from "../Portal/Portal";

const Modal = (props) => {

  const {text, closeHandler, action} = props;

  return (
    <div>
      <Portal>
        <div className={styles.modalWrapper} onClick={closeHandler}></div>
        <div className={styles.modal}>
          {text}
          <div className="modal-btn">
            <button className={styles.modalBtn} onClick={closeHandler}>Close</button>
            {action}
          </div>
        </div>
      </Portal>

    </div>
  );
};

export default Modal;