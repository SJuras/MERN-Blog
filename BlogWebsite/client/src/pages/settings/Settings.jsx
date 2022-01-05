import React from 'react'
import './Settings.css'
import Sidebar from '../../sidebar/Sidebar';
import ProfilePic from '../../assets/profilePicMe.png';

import { FaUserCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete"><FaWindowClose style={{ marginBottom: "-2px" }} /> Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={ProfilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <FaUserCircle style={{ cursor: "pointer", fontSize: "24px", color: "lightcoral" }} />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
