import React, { Component } from 'react';
import { render } from 'react-dom';


class Car extends React.Component {
  render() {
  return (<div><h2>I am a {this.props.brand.model}! New: {this.props.brand.suka}</h2> <div> Rand:{this.props.brand.showrandom}</div> 
  <div> arrayfun:{this.props.brand.lists}</div>
  </div>);
  }
}

class Garage extends React.Component {

constructor(props) {
  super(props);
    this.state = { randomint:'',list:[1234,2789]};
  }


   getRandomInt(max) {
     let random = Math.floor(Math.random() * Math.floor(max));
     this.setState({randomint:random});
    //  console.log(random);
     console.log(this.state);
    return random;
  }


  render() {
    const carinfo = {name: "Ford", model: "Mustang",suka:"loshara", showrandom:this.state.randomint,lists:this.state.list[1]};
    return (
      <div>
      <h1>Who lives in my garage?</h1>
    {/* <h1>{this.state.randomint}</h1> */}

      <Car brand={carinfo} />
      <div>
        <button onClick={()=>this.getRandomInt(100)}>Рандомное число</button>
      </div>
      </div>

    );
  }
}

render(<Garage />, document.getElementById('root'));