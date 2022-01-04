import React from 'react'
import './Write.css'
import { FaPlus } from "react-icons/fa";
import Ski from '../../assets/ski.jpg';

export default function Write(){
  return(
    <div className="write">
      <img src={Ski} alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <FaPlus style={{ width: "25px", height: "25px", borderRadius: "50%", border: "1px solid", padding: "3px", color: "rgb(121, 118, 118)" , cursor: "pointer" }} />
          </label>
          <input type="file" id="fileInput" style={{ display: "none"}} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
