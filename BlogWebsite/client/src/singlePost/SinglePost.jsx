import React from 'react';
import './SinglePost.css';
import Ski from '../assets/ski.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


export default function SinglePost(){
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/"+path);
      setPost(res.data)
    };
    getPost();
  },[path])

  return(
    <div className="singlePost">
      <div className="singlePostWrapper">
      {
        post.photo ? <img src={post.photo} alt="ski" className="postImg" /> : <img src={Ski} alt="ski resort" className="postImg" />
      }
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <FaEdit style={{ cursor: "pointer", fontSize: "24px", color: "teal", marginRight: "12px" }} />
            <FaTrashAlt style={{ cursor: "pointer", fontSize: "24px", color: "tomato" }} />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link></span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}
