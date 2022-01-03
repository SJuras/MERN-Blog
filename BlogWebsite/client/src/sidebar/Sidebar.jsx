import React from 'react'
import "./Sidebar.css"
import ProfilePic from "../assets/profilePicMe.png"

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Sidebar() {
  return(
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={ProfilePic} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover"}} alt="profile pic" />
        <p>
          Blog about books, reading and stuff. I love reading and I don't read as much as I wanted to.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FaFacebook style={{ fontSize: "20px", marginRight: "10px", color: "#444", cursor: "pointer" }} />
          <FaTwitter style={{ fontSize: "20px", marginRight: "10px", color: "#444", cursor: "pointer" }} />
          <FaPinterest style={{ fontSize: "20px", marginRight: "10px", color: "#444", cursor: "pointer" }} />
          <FaInstagram style={{ fontSize: "20px", marginRight: "10px", color: "#444", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}
