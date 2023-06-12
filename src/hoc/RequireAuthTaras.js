import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router";

const RequireAuthTaras = ({children}) => {

  const auth = useSelector(store => store.auth)

  if (!auth) {
    return <Navigate to={"/auth"}/>
  }

  return children;
};

export default RequireAuthTaras;