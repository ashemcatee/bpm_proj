import React from 'react';
import "./App.css";
import SongEntry from "./songcontroller.jsx"
// import { useSelector } from 'react-redux';




const Submission = () => {
    // if (document.getElementById("songName") !== null)
    // {let song = document.getElementById("songName").value
    // let artist = document.getElementById("artistName").value
    // console.log('Form submitted:', song, artist)}
    return (
        <div className="container">
        <div className="outerBox">
          <h1 id="header">Music Submission</h1>
          <div>
            <SongEntry />
          </div>
        </div>
      </div>
      )
}
export default Submission
