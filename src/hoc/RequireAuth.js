import React from 'react';
import {useLocation} from "react-router-dom";
import {Navigate} from "react-router";

const RequireAuth = ({children}) => {
  const location = useLocation();
  const auth = false;

  if (!auth){
    return <Navigate to={"/login"} state={{from: location}}/>          //переадресация в Navigate в "/login" и пробрасываем от куда мы приходим в state
  }
  return children;
};

export default RequireAuth;