import React from 'react';
import style from "./AppRouter.module.scss"
import {Route, Routes} from "react-router";
import HomePage from "../../pages/HomePage";
import BlogPage from "../../pages/BlogPage";
import AboutPage from "../../pages/AboutPage";
import NotfoundPage from "../../pages/NotfoundPage";
import {Link} from "react-router-dom";
import Layout from "../../router/Layout";

const AppRouter = () => {
  return (
    <>

      {/*<div className={style.div}>*/}
      {/*  <h1>Get started with React-Router 6</h1>*/}
      {/*</div>*/}
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          {/*<Route path={"/"} element={<HomePage/>}/>*/}
          <Route index element={<HomePage/>}/>
          <Route path={"/posts"} element={<BlogPage/>}/>
          <Route path={"/about"} element={<AboutPage/>}/>
          <Route path={"*"} element={<NotfoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;