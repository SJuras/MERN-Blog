import React from 'react';
import './SinglePost.css';
import Ski from '../assets/ski.jpg';

import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


export default function SinglePost(){
  return(
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={Ski} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem Ipsum
          <div className="singlePostEdit">
            <FaEdit style={{ cursor: "pointer", fontSize: "24px", color: "teal", marginRight: "12px" }} />
            <FaTrashAlt style={{ cursor: "pointer", fontSize: "24px", color: "tomato" }} />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: Janine</span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vestibulum arcu sit amet risus malesuada, a cursus ante commodo.
          Donec nec sodales leo. Suspendisse potenti. Curabitur finibus non
          augue id sodales. Morbi id facilisis felis. Maecenas magna justo,
          consectetur sit amet augue quis, aliquet accumsan dui. Mauris vitae
          rhoncus elit, a dignissim velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vestibulum arcu sit amet risus malesuada, a cursus ante commodo.
          Donec nec sodales leo. Suspendisse potenti. Curabitur finibus non
          augue id sodales. Morbi id facilisis felis. Maecenas magna justo,
          consectetur sit amet augue quis, aliquet accumsan dui. Mauris vitae
          rhoncus elit, a dignissim velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vestibulum arcu sit amet risus malesuada, a cursus ante commodo.
          Donec nec sodales leo. Suspendisse potenti. Curabitur finibus non
          augue id sodales. Morbi id facilisis felis. Maecenas magna justo,
          consectetur sit amet augue quis, aliquet accumsan dui. Mauris vitae
          rhoncus elit, a dignissim velit.
        </p>
      </div>
    </div>
  );
}
