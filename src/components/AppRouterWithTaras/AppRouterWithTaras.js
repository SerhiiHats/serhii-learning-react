import React from 'react';
import {Route, Routes} from "react-router";
import LayoutForClassTaras from "../../router/LayoutForClassTaras";
import HomePage from "../../pages/HomePage";
import PostAsynchronous from "../PostAsynchronous/PostAsynchronous";
import MyFirstComponent from "../MyFirstComponent/MyFirstComponent";
import App from "../App/App";
import Auth from "../Auth/Auth";
import RequireAuth from "../../hoc/RequireAuth";
import RequireAuthTaras from "../../hoc/RequireAuthTaras";

const AppRouterWithTaras = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LayoutForClassTaras/>}>
        <Route index element={<HomePage/>}/>
        <Route path={"lesson1"} element={<MyFirstComponent color="red" size={16}/>}/>
        <Route path={"lesson2"} element={<HomePage/>}/>
        <Route path={"lesson3"} element={<HomePage/>}/>
        <Route path={"posts"} element={<PostAsynchronous/>}/>
        <Route path={"auth"} element={<Auth/>}/>
        <Route path={"all"} element={
          <RequireAuthTaras>
            <App/>
          </RequireAuthTaras>
        }/>
      </Route>
    </Routes>
  );
};

export default AppRouterWithTaras;