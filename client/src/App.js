import React from "react";
import { Component } from "react";
import axios from "axios";

import "./App.css";

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
      <div className="App">
        <h1>
          Happy building{" "}
          <span role="img" aria-label="Smiling emoji">
            😃
          </span>
        </h1>
      </div>
    );
  }
}

export default App;
