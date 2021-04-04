import logo from './logo.svg';
import './App.css';
import LineGraph from './components/LineGraph';
import React  from "react";
import {ImArrowDown} from 'react-icons/im';
import {Link} from 'react-scroll';


class App extends React.Component {
  


  constructor(props){
    super(props);
    this.state = {
      data: [],
      id_graphic: 1,
      label: 'EMA 200',
      value: 4,
      img: 2,
      info: 2,
      isTypeLine: false,
      API: 'http://localhost:3100', //hola
    }

  }
  render(){

  return (
    <div className="container">
       
       <div className="App-header">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the TradingBot Lo' Muchacho'
        </p>
        <Link  to="myChart" spy={true} smooth={true}><ImArrowDown  /></Link>
        </div>
      </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
              <LineGraph key={Math.random()} param = {this.state.id_graphic} months = {this.state.value} label= {this.state.label} typeGr = {this.state.isTypeLine} info= {this.state.info} />
              </div>
              </div> 
         
    </div>
  );
}}

export default App;
