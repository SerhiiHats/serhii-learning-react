import React from 'react';
import {Route, Routes} from "react-router";
import LayoutForClassTaras from "../../router/LayoutForClassTaras";
import HomePage from "../../pages/HomePage";
import PostAsynchronous from "../PostAsynchronous/PostAsynchronous";
import MyFirstComponent from "../MyFirstComponent/MyFirstComponent";

const AppRouterWithTaras = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LayoutForClassTaras/>}>
        <Route index element={<HomePage/>}/>
        <Route path={"lesson1"} element={<MyFirstComponent color="red" size={16}/>}/>
        <Route path={"lesson2"} element={<HomePage/>}/>
        <Route path={"lesson3"} element={<HomePage/>}/>
        <Route path={"posts"} element={<PostAsynchronous/>}/>

      </Route>
    </Routes>
  );
};

export default AppRouterWithTaras;