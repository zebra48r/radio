import React from 'react';
import Wave from "@foobar404/wave";

class Player extends React.Component {
  render() {
    let wave = new Wave();
    let stream = 'http://192.168.100.223/radio/8010/rusrock.mp3?1604256571';
    wave.fromStream(stream, "output", {
        type: "shine",
        colors: ["red", "white", "blue"]
    });

    return (
      <div><button onClick={() => this.wave.playStream()}>Запустить проигрывание</button></div>
    );
  }
}
