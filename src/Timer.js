import React from 'react';
import axios from 'axios';

// import Ticker from 'react-ticker'
export class Timer extends React.Component {
  constructor() {
    super();
    this.state = { data: '' };
  }
  async getTime() {
    var config = {
      method: 'get',
      url: 'http://worldclockapi.com/api/json/est/now',
      headers: {}
    };

    await axios(config)
      .then(response => {
        console.log(response.data);
        // let tracksarray = response.data.map(now_playing => <ul>{now_playing.sh_id}--{now_playing.album}--{now_playing.song.title}--{now_playing.song.album}--{now_playing.played_at}</ul>);
        let data = response.data.currentDateTime;
        console.log(data);
        //this.setState({ track: trackname, album: albumname,logo:logo,artist:artist,songid:songid,fullname:fullname,streamer:streamer});
        this.setState({ data: data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  async componentDidMount() {
    await this.getTime();
    this.intervalID = setInterval(() => {
      this.getTime();
    }, 1000 * 6);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    return (
      <div>
        <p>sukablad:{this.state.data}</p>

      </div>
    );
  }
}
