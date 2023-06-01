import React from 'react';
import {useLocation} from "react-router-dom";
import {Navigate} from "react-router";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({children}) => {
  const location = useLocation();
  const {user} = useAuth()

  if (!user){
    return <Navigate to={"/login"} state={{from: location}}/>          //переадресация в Navigate в "/login" и пробрасываем от куда мы приходим в state
  }
  return children;
};

export default RequireAuth;