import React from 'react';
import style from "./pagesStyle.module.scss";

const HomePage = () => {
  return (
    <div className={style.home}>
      <h1>Home </h1>
      <p>This is a Home page with React-router-dom library</p>
    </div>
  );
};

export default HomePage;