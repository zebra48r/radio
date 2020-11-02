import React, { useState, useEffect } from 'react'
// import AudioPlayerStyle from "../styles/AudioPlayer.js"
// import Slider from 'react-rangeslider'
import Wave from "@foobar404/wave"

// import track1 from "http://192.168.100.223/radio/8010/rusrock.mp3?1604335701"



export default function AudioPlayer() {
    let [wave] = useState(new Wave())


    useEffect(() => {

        //prep audio & state
        // const elm = document.querySelector("#player")
        // setAudioElement(elm)
        // handleState("duration", (!elm.duration) ? 1000 : elm.duration)
        // elm.volume = .5

        //create wave visual
        wave.fromElement("player", "playerCanvas", { type: "flower", colors: ["green", "red",'yellow','blue','white'] })

        //update time tracker
        // let timeLoop = setInterval(() => {
        //     handleState("time", elm.currentTime)
        // }, 500)

        return () => {
            // clearInterval(timeLoop)
        }
    }, [])




    return (
        <div className="AudioPlayer">
            <canvas className="playerCanvas" id="playerCanvas" height={window.innerHeight} width={window.innerWidth}></canvas>
            <audio control="true" id="player" src="http://192.168.100.223/radio/8010/rusrock.mp3?1604335701" autoPlay="autoplay"></audio>
        </div>
    )
}