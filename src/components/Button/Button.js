import React from 'react';
import clsx from "clsx";
import {Icon} from "../Icon/Icon"
import styles from "./Button.module.css"
import {iconTypes} from "../../constants/icons";

export const Button = (props) => {
  const {children, className, size, color, ...rest} = props;
  const render = (
    <span>
      {iconTypes && <Icon type={iconTypes}/>}
      {children || null}
    </span>
  );

  return (
    <button
      className={
        clsx([
          styles.container,
          {
            [styles[size]]:size,
            [styles[`container_${styles}`]]:color
          },
          className
          ]
        )
      }
      {...rest}
>
      {render}
    </button>
  );
}

// export default Button;