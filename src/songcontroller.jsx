import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';
import { useState, useEffect } from 'react'
import axios from 'axios';
import "./App.css";


const SongEntry = () => {
    
    const [music, setSong] = useState({})

    const handleSongText = (event) => {
        setSong({song: event.target.value});
    }
    const handleArtistText = (event) => {
        const songInfo = music;
        songInfo['artist'] = event.target.value;
        setSong(songInfo);
    }
    const handleSubmit = async (event) =>{
        
        event.preventDefault();
        console.log(`song: ${music['song']}, artist: ${music['artist']}`);
        const { song, artist } = music
        const currentSong = {
            song,
            artist,
        }
        console.log(currentSong)
        // const result = await fetch('http://localhost:8000/music', {method: 'POST', body: currentSong});
        // const data = await result.json();
        // console.log('this is data:', data)
       try {
        await axios
        .post('http://localhost:8000/', currentSong)
        .then((response) => {
            console.log('response data',response.data);
            setSong(response.data)
            })
       }
        catch(error){
            console.log(error);
        }
        document.getElementById('songForm').reset();
        return false;

    }
    const newResultsList = []
    for(let key in music){
        newResultsList.push(<div>{music[key]}</div>)
    }
     
   return (
   <div>
    <form onSubmit={handleSubmit} id="songForm">
       Song Name <input type="text" id="songInput" onChange={handleSongText}></input>
        <br></br>
       <br></br>
       Artist Name <input type="text" id="artistInput" onChange={handleArtistText}></input>
       <button type="submit" id="submission">Submit</button>
       <div id="results">Results:
        {newResultsList}
       </div>
       {/* <br></br>
       <button onClick={clickFunction()}>Submit</button> */}
    </form>
    </div>)
}

export default SongEntry