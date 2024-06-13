const express = require('express');
const path = require('path');
const cors = require('cors');
let client_id = '45d15ce3317a4135956e1f5e9a19bca8';
let client_secret = '2d36024b717b4b1bbac89a0445ddb692';

const app = express();
app.use(cors());
app.use(express.json());


var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var token = body.access_token;
//   }
// });



app.get('/message', function(req, res){
    // res.sendFile(path.join(__dirname, 'build', 'index.html'))
    res.json({message: "hello from server"})
})

app.listen(8000, () => {
    console.log("server is running ")
})