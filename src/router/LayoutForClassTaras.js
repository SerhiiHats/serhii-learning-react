import React from 'react';
import {Outlet} from "react-router-dom";
import "./LayoutForClassTaras.scss";
import Menu from "../components/Menu/Menu";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const LayoutForClassTaras = () => {
  return (
    <ErrorBoundary>
      <div className={"containerLayout"}>
        <header className={"headerNew"}> header for lesson at React</header>
        <div className={"containerMenuWithMain"}>
          <nav className={"menu"}>
            <Menu/>
          </nav>
          <main className={"main"}>
            <Outlet/>
          </main>
        </div>
        <footer className={"footerNew"}> 2023 footer for lesson on React</footer>
      </div>
    </ErrorBoundary>
  );
};

export default LayoutForClassTaras;