// 'use esversion: 6'
import React from 'react';
import './MainView.css';
import {GetTrackInfo} from './GetTrackInfo';
import AudioPlayer from './AudioPlayer';

class Chiptune extends React.Component {

  render(){
    
    return (
      
      <div className = "MainScreen">
        <AudioPlayer></AudioPlayer>
        <GetTrackInfo></GetTrackInfo>
      </div>

    );
  }
}

export default Chiptune;