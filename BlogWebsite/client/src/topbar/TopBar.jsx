import React from 'react'
import "./TopBar.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import ProfilePic from "../assets/profilePicMe.png"

export default function TopBar() {
  return(
    <div className="top">
      <div className="topLeft">
        <FaFacebook style={{ fontSize: "20px", marginRight: "10px", color: "#444", cursor: "pointer" }} />
        <FaTwitter style={{ fontSize: "20px", marginRight: "10px", color: "#444", cursor: "pointer" }} />
        <FaPinterest style={{ fontSize: "20px", marginRight: "10px", color: "#444", cursor: "pointer" }} />
        <FaInstagram style={{ fontSize: "20px", marginRight: "10px", color: "#444", cursor: "pointer" }} />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img src={ProfilePic} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover"}} alt="profile pic" />
        <FaSearch style={{ fontSize: "18px", color: "#666", cursor: "pointer", marginLeft: "15px" }} />
      </div>
    </div>
  )
}
