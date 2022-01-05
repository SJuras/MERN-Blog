import React from 'react'
import "./TopBar.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import ProfilePic from "../assets/profilePicMe.png"
import { Link } from 'react-router-dom';

export default function TopBar() {

  const user = false;

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
          <li className="topListItem">
            <Link to="/" className="link" >Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link" >About</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link" >Contact</Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link" >Write</Link>
          </li>
          <li className="topListItem">
            { user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img src={ProfilePic} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover"}} alt="profile pic" />
          ) : (
            <ul className="topList">
              <li className="topListItem"><Link to="/login" className="link" >Login</Link></li>
              <li className="topListItem"><Link to="/register" className="link" >Register</Link></li>
            </ul>
          )
        }
        <FaSearch style={{ fontSize: "18px", color: "#666", cursor: "pointer", marginLeft: "15px" }} />
      </div>
    </div>
  )
}
