import React from 'react'
import './Settings.css'
import Sidebar from '../../sidebar/Sidebar';
import ProfilePic from '../../assets/profilePicMe.png';

import { FaUserCircle } from "react-icons/fa";

export default function Settings(){
  return(
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePic">
            <img src={ProfilePic} alt="profile picture" />
            <label htmlFor="fileInput">
              <FaUserCircle style={{ fontSize: "24px", cursor: "pointer" }} />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sarif" />
          <label>Email</label>
          <input type="email" placeholder="sarifwebdesign@gmail.com" />
          <label>Password</label>
          <input type="password" />
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
