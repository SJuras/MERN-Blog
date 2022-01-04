import React from 'react'
import './Post.css'
import Ski from '../assets/ski.jpg'

export default function Post(){
  return(
    <div className="post">
      <img src={Ski} alt="ski resort" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem Ipsum</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis vestibulum ex,
         sed bibendum sem. Nunc ac semper neque. Donec vel leo et lorem pharetra rhoncus sed quis
          justo. Mauris iaculis enim quis nunc imperdiet ornare. Cras vitae nisl non turpis luctus
          ultricies. Suspendisse mauris nisi, tempor nec tincidunt eu, pretium sed enim. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel ipsum
          finibus, mattis neque non, iaculis felis. Etiam mi quam, congue at faucibus id, malesuada nec
          purus. Morbi sodales nunc vel commodo dapibus. Vestibulum ornare, orci sit amet faucibus
          vehicula, augue sapien feugiat sem, vitae viverra leo turpis quis diam. Praesent mattis
          malesuada lorem, at scelerisque magna cursus ac. Fusce et arcu eros. Sed pharetra non
          ligula eget molestie. Aliquam sit amet convallis ante. Suspendisse sollicitudin
          scelerisque tristique.
      </p>
    </div>
  );
}
