// 'use esversion: 6'
import React from 'react';
import './MainView.css';
import axios from 'axios';
import Ticker from 'react-ticker'



class ShowTrackList extends React.Component {
  render() {
    return (<div>
      <p>Композиция: {this.props.t.track}</p>
      <p>Альбом: {this.props.t.album}</p>
      <p>Лого: <img src={this.props.t.logo} width="200" height="200" alt="logo.jpg"></img></p>
      <p>Исполнитель: {this.props.t.artist}</p>
      <p>ID: {this.props.t.songid}</p>
      <p>Полное название: {this.props.t.fullname}</p>
      <p>Стример: {this.props.t.streamer}</p>

    </div>);
  }
}
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: '',
//       createdAt: '',
//       name: '',
//       sum:'',
//       typeofdonations:''
//     };
//   }
// useEffect(() => {
//   getDonationList() {

//     var config = {
//       method: 'get',
//       url: 'https://5f801617d6aabe00166f0e2f.mockapi.io/api/v1/donations',
//       headers: {}
//     };

//     axios(config)
//       .then(response => {
//         //console.log(response.data);
//         let id = response.data[0].id;
//         let name = response.data[0].name;
//         let sum = response.data[0].sum;
//         let typeofdonations = response.data[0].typeofdonations;
//         console.log(response.data);
//         //let tracksarray = 
//         //console.log(trackname);
//         // console.log(JSON.stringify(response.data));
//         this.setState({ id: id, name: name, sum: sum,typeofdonations:typeofdonations });
//         console.log(this.state);

//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   }

//   render() {
//     return (
//       <div className="Header">
//         {this.getDonationList()}
//           <Ticker>
//             {() => (
//                 <div>
//                     <h1>Best Donation:{this.state.name} {this.state.sum}; </h1>
//                 </div>
//             )}
//           </Ticker>
//           </div>
//     );
//   }
// }


class MainView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      track: '',
      album: '',
      tracksarray: []
    };
  }
  //Вызываем инфу по альбому
  getTrackList() {

    var config = {
      method: 'get',
      url: 'http://192.168.100.223/api/nowplaying/russian_rock',
      headers: {}
    };

    axios(config)
      .then(response => {
        console.log(response.data);
        let now_playing = response.data.now_playing;
        let trackname = response.data.now_playing.song.title;
        let albumname = response.data.now_playing.song.album;
        let logo = response.data.now_playing.song.art;
        let artist = response.data.now_playing.song.artist;
        let songid = response.data.now_playing.song.id;
        let fullname = response.data.now_playing.song.text;
        let streamer = response.data.now_playing.streamer;
        console.log(trackname,albumname);
        // let tracksarray = response.data.map(now_playing => <ul>{now_playing.sh_id}--{now_playing.album}--{now_playing.song.title}--{now_playing.song.album}--{now_playing.played_at}</ul>);
        console.log(response.data);
        //let tracksarray = 
        //console.log(trackname);
        // console.log(JSON.stringify(response.data));
        this.setState({ track: trackname, album: albumname,logo:logo,artist:artist,songid:songid,fullname:fullname,streamer:streamer});
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
      track: this.state.track,
      album: this.state.album,
      logo:this.state.logo,
      artist:this.state.artist,
      songid:this.state.songid,
      fullname:this.state.fullname,
      streamer:this.state.streamer
    };
    const donations = {
      name:"Paul",
      sum:"$5000"
    }
    return (
      <div>
        {/* <Header d={donations}></Header> */}
        <ShowTrackList t={traklistinfo}></ShowTrackList>
        <button onClick={() => this.getTrackList()}>Получить инфо о композиции</button>

      </div>

    );
  }
}

export default MainView;