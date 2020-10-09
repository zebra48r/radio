import React from 'react';
import logo from './logo.svg';
import axios from 'axios';



function getTrackList() {

  var config = {
    method: 'get',
    url: 'https://5f801617d6aabe00166f0e2f.mockapi.io/api/v1/tracklist',
    headers: {}
  };

  axios(config)
    .then(response => {
      //console.log(response.data);
      let trackname = response.data[0].track;
      let albumname = response.data[0].album;
      let tracksarray = response.data.map(trackname => <ul>{trackname.id}--{trackname.album}--{trackname.track}--{trackname.album}--{trackname.createdAt}</ul>);
      console.log(response.data);
      //let tracksarray = 
      //console.log(trackname);
      // console.log(JSON.stringify(response.data));
      this.setState({ tracklist: trackname, album: albumname, tracksarray: [tracksarray] });
      //console.log(this.state);
    })
    .catch(error => {
      console.log(error);
    });
}
  
export default getTrackList;