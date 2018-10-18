import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Game from "./Game";
import Leaderboard from "./Leaderboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "game"
    };
  }

  changeView(page) {
    this.setState({ view: page });
  }

  render() {
    if (this.state.view == "game") {
      // if the state is game it returns our game component
      return (
        <div>
          <Navbar onChange={page => this.changeView(page)} />
          <Game />
        </div>
      );
    } else if (this.state.view == "leaderboard") {
      // table should be it's own component, but just as an example
      return (
        <div>
          <Navbar onChange={page => this.changeView(page)} />
          <Leaderboard />
    
        </div>
      );
    }
  }
}

export default App;
