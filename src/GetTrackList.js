import React from 'react';
import logo from './logo.svg';
import axios from 'axios';



function getTrackList() {
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://5f801617d6aabe00166f0e2f.mockapi.io/api/v1/tracklist',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}
  
export default getTrackList;