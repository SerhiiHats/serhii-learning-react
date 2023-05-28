import React from 'react';
import "./Layout.scss";
import {NavLink, Outlet} from "react-router-dom";
import '../index.scss';

const Layout = () => {
  return (
    <>
      <header className={"header"}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/posts"}>Blog</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/all"}>All my task</NavLink>
        {/*<Link to={"/about"}>About</Link>*/}
        {/*<a href={"/about"}>About</a>*/}
      </header>

      <main className={"containerMain"}>
        <Outlet/>
      </main>

      <footer className={"footer"}>2023 - my footer</footer>
    </>
  );
};

export default Layout;