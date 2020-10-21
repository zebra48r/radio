import React from 'react';

export class ShowTrackList extends React.Component {
  render() {
    return (

      <div>
        <p>Композиция: {this.props.t.track}</p>
        <p>Альбом: {this.props.t.album}</p>
        <p>Лого: <img src={this.props.t.logo} width="200" height="200" alt="logo.jpg"></img></p>
        <p>Исполнитель: {this.props.t.artist}</p>
        <p>ID: {this.props.t.songid}</p>
        <p>Полное название: {this.props.t.fullname}</p>
        <p>Длительность:{this.props.t.duration}</p>
        <p>Истекло времени:{this.props.t.elapsed}</p>
        <p>Начало играть:{this.props.t.played_at}</p>
        <p>Осталось играть:{this.props.t.remaining}</p>
        <p>sh_id:{this.props.t.sh_id}</p>
        <p>Стример: {this.props.t.streamer}</p>
      </div>);
  }
}
