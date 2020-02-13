import React, { Component } from 'react';
import axios from "axios";

import Nav from "./components/Nav.js";
import PlayerCard from "./components/PlayerCard.js";

import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      footballers: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/footballers`)
      .then(res => {
        // console.table(res.data);
        // console.log(Array.isArray(res.data));
        // console.log(Array.isArray(res.data[3]));
        this.setState({ footballers: res.data })
        console.table(this.state.footballers);
      })
      .catch(err => {
        console.group(`There was an error!`, err)
      })
  };

  render() {  
      return (
        <div className="App">
          <Nav />
          <div className="container">
            {this.state.footballers.map(footballer => (
              <PlayerCard key={footballer.id} footballer={footballer}/>
            ))}
          </div>
        </div>
      );
    }
}

export default App;
