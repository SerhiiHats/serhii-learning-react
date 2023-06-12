import React from 'react';
import {NavLink} from "react-router-dom";
import "./Menu.scss"

const Menu = () => {
  return (
    <div className={"wrapMenu"}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/lesson1"}>Lesson 1</NavLink>
      <NavLink to={"/lesson2"}>Lesson 2</NavLink>
      <NavLink to={"/lesson3"}>Lesson 3</NavLink>
      <NavLink to={"/posts"}>Posts</NavLink>
      <NavLink to={"/auth"}>Auth</NavLink>
      <NavLink to={"/all"}>All</NavLink>
    </div>
  );
};

export default Menu;