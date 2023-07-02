import React, {Fragment, useState} from 'react';
import style from "./pagesStyle.module.scss";
import Clock from "../components/Clock/Clock";

const HomePage = () => {

  return (
    <div className={style.home}>
      <h1>Home</h1>
      <p>This is a Home page with React-router-dom library</p>
      <Clock/>
    </div>
  );
};

export default HomePage;