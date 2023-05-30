import React, {useState} from 'react';
import {Navigate, useNavigate} from "react-router";
import {useLocation} from "react-router-dom";

const LoginPage = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  console.log(location);
  console.log(fromPage);

  return (
    <div>
      <h1>Login page</h1>
      {fromPage}
      <button style={{width: 70, height: 30, margin: 20}} onClick={()=>setLogin(!login)}>{login ? "Log out" : "Log in"}</button>
      {/*{login && navigate(fromPage, {state:true})}*/}
    </div>
  );
};

export default LoginPage;