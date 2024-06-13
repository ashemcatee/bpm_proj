import React from "react";
import "./App.css";
import Submission from "./handlesubmission.jsx";
import { useState, useEffect } from "react";
// import handleSubmission from "/handleSubmission"
const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("http://localhost:8000/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);
return (
	<div>
	<h1 className="heading">{message}</h1>
	<h4 className="sub-heading">
		Efficiently find music to match your tastes 
        <div>
        <Submission />
        </div>
	</h4>
    </div>
);
};

// function handleSubmission(event){
//     if (document.getElementById("songName") !== null)
//     {let song = document.getElementById("songName").value
//     let artist = document.getElementById("artistName").value
//     console.log('Form submitted:', song, artist)}
// }

export default App;
