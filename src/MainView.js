// 'use esversion: 6'
import React from 'react';
import './MainView.css';
import axios from 'axios';
import Ticker from 'react-ticker'



class ShowTrackList extends React.Component {
  render() {
    return (<div>
      <p>track: {this.props.t.track}</p>
      <p>album: {this.props.t.album}</p>
      <div>tracks: <ul>{this.props.t.tracks}</ul></div>

    </div>);
  }
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      createdAt: '',
      name: '',
      sum:'',
      typeofdonations:''
    };
  }
useEffect(() => {
  getDonationList() {

    var config = {
      method: 'get',
      url: 'https://5f801617d6aabe00166f0e2f.mockapi.io/api/v1/donations',
      headers: {}
    };

    axios(config)
      .then(response => {
        //console.log(response.data);
        let id = response.data[0].id;
        let name = response.data[0].name;
        let sum = response.data[0].sum;
        let typeofdonations = response.data[0].typeofdonations;
        console.log(response.data);
        //let tracksarray = 
        //console.log(trackname);
        // console.log(JSON.stringify(response.data));
        this.setState({ id: id, name: name, sum: sum,typeofdonations:typeofdonations });
        console.log(this.state);

      })
      .catch(error => {
        console.log(error);
      });
  }
  }
}, []);




  render() {
    return (
      <div className="Header">
        {this.getDonationList()}
          <Ticker>
            {() => (
                <div>
                    <h1>Best Donation:{this.state.name} {this.state.sum}; </h1>
                </div>
            )}
          </Ticker>
          </div>
    )
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
    const donations = {
      name:"Paul",
      sum:"$5000"
    }
    return (
      <div>
        <Header d={donations}></Header>
        <ShowTrackList key={traklistinfo.tracks.id} t={traklistinfo}></ShowTrackList>
        <button onClick={() => this.getTrackList()}>Получить инфо о композиции</button>

      </div>

    );
  }
}

export default MainView;