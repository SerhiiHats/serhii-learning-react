import React from 'react';
import style from "../components/AppRouter/AppRouter.module.scss";
import {Link, NavLink, Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/posts"}>Blog</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        {/*<Link to={"/about"}>About</Link>*/}
        {/*<a href={"/about"}>About</a>*/}
      </header>

      <main className={style.containerMain}>
        <Outlet/>
      </main>

      <footer className={style.footer}>2023 - my footer</footer>
    </>
  );
};

export default Layout;