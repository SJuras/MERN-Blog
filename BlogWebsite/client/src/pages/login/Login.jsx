import React from 'react'
import { useRef } from 'react';
import './Login.css'

import { Link } from 'react-router-dom';


export default function Login(){

  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return(
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username... " ref={userRef} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password... " ref={passwordRef} />
        <button className="loginButton" type="submit">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">Register</Link>
      </button>
    </div>
  );
}
