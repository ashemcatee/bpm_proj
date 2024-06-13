import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';
import { useState, useEffect } from 'react'

const SongEntry = () => {
    const [song, setSong] = useState({})

    const handleSongText = (event) => {
        setSong({song: event.target.value});
    }
    const handleArtistText = (event) => {
        const songInfo = song;
        songInfo['artist'] = event.target.value;
        setSong(songInfo);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`song: ${song['song']}, artist: ${song['artist']}`)
        document.getElementById('songForm').reset();
        return false;

    }
   return (
   <div>
    <form onSubmit={handleSubmit} id="songForm">
       Song Name <input type="text" id="songInput" onChange={handleSongText}></input>
        <br></br>
       <br></br>
       Artist Name <input type="text" id="artistInput" onChange={handleArtistText}></input>
       <button type="submit">Submit</button>
       {/* <br></br>
       <button onClick={clickFunction()}>Submit</button> */}
    </form>
    </div>)
}

const clickFunction = () => {setState('hi')
    console.log('Submitted!')}

export default SongEntry