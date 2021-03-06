'use esversion: 6'
import React from 'react';
import './MainView.css';
import axios from 'axios';
// import getTrackList from './GetTrackList';



class ShowTrackList extends React.Component {
  render() {
    return (<div>
      <p>track: {this.props.t.track}</p>
      <p>album: {this.props.t.album}</p>
      <div>tracks: <ul>{this.props.t.tracks}</ul></div>

    </div>);
  }
}

class MainView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tracklist: '1',
      album: '2',
      tracksarray: []
    };
  }
  //Вызываем инфу по альбому
  getTrackList() {

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

  // changeState() {
  //   this.setState({ tracklist: '5', album: '6' });
  //   console.log(this.state);
  //   return true;
  // }
  render() {
    const traklistinfo = {
      track: this.state.tracklist,
      tracks: this.state.tracksarray,
      album: this.state.album
    };
    return (
      <div>
        <ShowTrackList key={traklistinfo.tracks.id} t={traklistinfo}></ShowTrackList>
        <button onClick={() => this.getTrackList()}>Получить инфо о композиции</button>

      </div>

    );
  }
}

export default MainView;