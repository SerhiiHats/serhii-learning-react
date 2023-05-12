import React from 'react';
import {Route, Routes} from "react-router";
import Layout from "./Layout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={}/>


        </Route>




      </Routes>
    </div>
  );
};

export default AppRoutes;