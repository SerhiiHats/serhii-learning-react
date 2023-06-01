import React, {useState} from 'react';
import {Navigate, useNavigate} from "react-router";
import {useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {signIn, user} = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    signIn(user, () => {navigate(fromPage, {replace: true})});
  }

  return (
    <div>
      <h1>Login page</h1>
      <p>you going from: {fromPage}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="username"/>
        </label>
        <button style={{width: 70, height: 30, margin: 20}}>{user ? "Log out" : "Log in"}</button>
      </form>
    </div>
  );
};

export default LoginPage;