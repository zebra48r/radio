import React from 'react';

export class ShowTrackList extends React.Component {
  render() {
    return (

      <div className="Text">
        <div><p id="radioname">Русский рок 24/7</p></div>
        <div><p id = "albumlogo"><img id="albumlogoimg" src={this.props.t.logo} width="650" height="650" alt="logo.jpg"></img></p></div>
        {/* <p id = "track">Композиция: {this.props.t.track}</p> */}
        {/* <p id = "album">Альбом: {this.props.t.album}</p>  */}
        {/* <p id = "artist">Исполнитель: {this.props.t.artist}</p> */}
        {/* <p id = "songid">ID: {this.props.t.songid}</p> */}
        <p id = "fullname">{this.props.t.fullname}</p>
        <p id = "duration">{this.props.t.duration}</p>
        <p id = "elapsed">{this.props.t.elapsed}</p>
        {/* <p id = "played_at">Начало играть:{this.props.t.played_at}</p> */}
        {/* <p id = "remaining">Осталось играть:{this.props.t.remaining}</p> */}
        {/* <p id = "sh_id">sh_id:{this.props.t.sh_id}</p>
        <p id = "streamer">Стример: {this.props.t.streamer}</p> */}
      </div>);
  }
}
