import React from 'react';
import clsx from "clsx";
import {Icon} from "../Icon/Icon"
import styles from "./Button.module.scss"


export const Button = (props) => {
  const {children, className, color, size, iconType, type = "button", ...rest} = props;
  const render = (
    <span>
      {iconType && <Icon type={iconType} color={color} size={size}/>}
      {children || null}
    </span>
  );

  return (
    <button
      type={type}
      className={clsx([
        styles.container,
        {
          [styles[size]]: size,
          [styles[`container_${color}`]]: color,
        },
        className
      ])
      }
      {...rest}
    >
      {render}
    </button>
  );
}

// export default Button;