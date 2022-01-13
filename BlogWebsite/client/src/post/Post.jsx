import React from 'react'
import './Post.css'
import Ski from '../assets/ski.jpg'

export default function Post({post}){
  return(
    <div className="post">
      {post.photo && (
        <img src={post.photo} alt="ski resort" className="postImg" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}
