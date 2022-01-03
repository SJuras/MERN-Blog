import React from 'react'
import './Header.css'
import Meadow from '../assets/meadow.jpg';

export default function Header() {
  return(
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImage" src={Meadow} alt="meadow" />
    </div>
  );
}
