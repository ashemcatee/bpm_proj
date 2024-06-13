const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios');
const qs = require('qs');

require('dotenv').config();

const client_id = `45d15ce3317a4135956e1f5e9a19bca8`; // client id
const client_secret = `2d36024b717b4b1bbac89a0445ddb692`; // secret
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

const getAuth = async () => {
  try{
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    //return access token
    console.log('the response: ', response)
    return response.data.access_token;
    //console.log(response.data.access_token);   
  }catch(error){
    //on fail, log the error in console
    console.log('auth error', error);
  }
}

// const getTrack = async (track_name) =>{
//   const access_token = await getAuth();
//   const api_url= `https://api.spotify.com/v1/search/?q=%20${track_name}&type=track`;
//   try {
//     const response = await axios.get(api_url, {
//       headers: {
//       'Authorization': `Bearer ${access_token}`
//       }
//     });
//     console.log('data', response.data.tracks.items[0].artists[0].name)
//     for (let item of response.data.tracks.items){
//       if(item.artists[0].name === 'Green Day'){
//         console.log('songs matching =', item, 'with artist: ', item.artists[0].name)
//       }
//     }
//     return response.data;
//   }catch(error){
//     console.log('gettrack error', error);
//   }
// }

// console.log(getTrack('holiday'))

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

// app.use(routes);


// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
//     "Content-Type": "application/x-www-form-urlencoded",
//     "grant_type": "client_credentials"
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
//https://open.spotify.com/track/71DiuXGizHqLPTdzCY6ND6?si=53bfc29973244d1e
// };

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var token = body.access_token;
//   }
// });

app.post('/', function(req,res){
  
  const newMusic = {
    song: req.body.song,
    artist: req.body.artist
  }
  const trackName = newMusic.song;
  const artistName = newMusic.artist;
  const getTrack = async (track_name, artist_name) =>{
    const access_token = await getAuth();
    const api_url= `https://api.spotify.com/v1/search/?q=%20${track_name}&type=track`;
    try {
      const response = await axios.get(api_url, {
        headers: {
        'Authorization': `Bearer ${access_token}`
        }
      });
      console.log('data', response.data.tracks.items[0].artists[0].name)
      for (let item of response.data.tracks.items){
        if(item.artists[0].name === artist_name){
          console.log('songs matching =', item.name, 'with artist: ', item.artists[0].name)
        }
      }
      return response.data;
    }catch(error){
      console.log('gettrack error', error);
    }
  }
  getTrack(trackName, artistName)
  res.end();
});

// app.post('/', function(req,res){
  // const newMusic = {
  //   song: req.body.song,
  //   artist: req.body.artist
  // }
//   console.log('herro')
//   res.send('POST REQUEST SENT');
// })

app.get('/', function(req, res){
    // res.sendFile(path.join(__dirname, 'build', 'index.html'))
    res.json({message: "Server Workin Hard"})
})



app.listen(8000, () => {
    console.log("server is running ")
})