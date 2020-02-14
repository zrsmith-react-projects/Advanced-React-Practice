import React from "react";
import { Component } from "react";
import axios from "axios";

import "./App.css";
import PlayerCard from "./components/PlayerCard";
import Nav from "./components/Nav.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5700/api/footballers")
      .then(res => {
        console.log("footballers", res.data);
        this.setState({ players: res.data });
      })
      .catch(error => {
        console.log("This is an error", error);
      });
  }

  render() {
    return (
      <div className="container">
        <Nav />>
        {this.state.players.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    );
  }
}

export default App;

{
  /* {this.state.players.map(player => (
          <PlayerCard
            key={player.id}
            name={player.name}
            rank={player.rank}
            team={player.team}
          />
        ))} */
}
