// 'use esversion: 6'
import React from 'react';
import './MainView.css';
import { Timer } from './Timer';
import {GetTrackInfo} from './GetTrackInfo';


class MainView extends React.Component {

  render(){
    const donations = {
      name: "Paul",
      sum: "$5000"
    }
    
    return (
      
      <div>
        {/* <Header d={donations}></Header> */}

        {/* <Timer></Timer> */}
        <GetTrackInfo></GetTrackInfo>
        {/* <button onClick={() => this.getTrackList()}>Получить инфо о композиции</button> */}
      </div>

    );
  }
}

export default MainView;