import React from 'react';
import {NavLink} from "react-router-dom";
import "./Menu.scss"
import {useSelector} from "react-redux";

const Menu = () => {
  const auth = useSelector(store => store.auth);

  const authName = auth ? "LogOut" : "LogIn";
  return (
    <div className={"wrapMenu"}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/lesson1"}>Lesson 1</NavLink>
      <NavLink to={"/lesson2"}>Lesson 2</NavLink>
      <NavLink to={"/lesson3"}>Lesson 3</NavLink>
      <NavLink to={"/posts"}>Posts</NavLink>
      <NavLink to={"/all"}>All</NavLink>
      <NavLink to={"/auth"}>{authName}</NavLink>
    </div>
  );
};

export default Menu;