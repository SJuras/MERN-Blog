import React from 'react'
import './Login.css'


export default function Login(){
  return(
    <div className="login">
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="email" placeholder="Enter your email... " />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password... " />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
