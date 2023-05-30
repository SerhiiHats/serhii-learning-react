import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import HomePage from "../../pages/HomePage";
import BlogPage from "../../pages/BlogPage";
import AboutPage from "../../pages/AboutPage";
import NotfoundPage from "../../pages/NotfoundPage";
import Layout from "../../router/Layout";
import App from "../App/App";
import SingleBlogPage from "../../pages/SingleBlogPage";
import CreatePostPage from "../../pages/CreatePostPage";
import EditPostPage from "../../pages/EditPostPage";
import LoginPage from "../../pages/LoginPage";
import RequireAuth from "../../hoc/RequireAuth";

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
          <Route path={"/posts/:id"} element={<SingleBlogPage/>}/>
          <Route path={"/posts/:id/edit"} element={<EditPostPage/>}/>
          <Route path={"/posts/new"} element={
            <RequireAuth>
              <CreatePostPage/>
            </RequireAuth>}/>
          <Route path={"/about"} element={<AboutPage/>}/>
          {/*<Route path={"/about-us"} element={<Navigate to={"/about"} replace={true}/>}/>*/}
          <Route path={"/all"} element={<App/>}/>

          <Route path={"/login"} element={<LoginPage/>}/>

          <Route path={"*"} element={<NotfoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;