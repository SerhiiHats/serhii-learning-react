import React from 'react';
import style from "./AppRouter.module.scss"
import {Route, Routes} from "react-router";
import HomePage from "../../pages/HomePage";
import BlogPage from "../../pages/BlogPage";
import AboutPage from "../../pages/AboutPage";
import NotfoundPage from "../../pages/NotfoundPage";
import {Link} from "react-router-dom";

const AppRouter = () => {
  return (
    <>
     <header className={style.header}>
       <Link to={"/"}>Home</Link>
       <Link to={"/posts"}>Blog</Link>
       <Link to={"/about"}>About</Link>
       {/*<a href={"/about"}>About</a>*/}
     </header>
      {/*<div className={style.div}>*/}
      {/*  <h1>Get started with React-Router 6</h1>*/}
      {/*</div>*/}
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/posts"} element={<BlogPage/>}/>
        <Route path={"/about"} element={<AboutPage/>}/>
        <Route path={"*"} element={<NotfoundPage/>}/>
      </Routes>
    </>
  );
};

export default AppRouter;