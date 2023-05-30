import React from 'react';
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  return (
    <div>
      {fromPage}
    </div>
  );
};

export default LoginPage;