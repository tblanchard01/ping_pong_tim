import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Game from "./Game";
import Leaderboard from "./Leaderboard";
import Rules from "./Rules"

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
    const { view } = this.state;

    return (
      <div>
        <Navbar onChange={page => this.changeView(page)} />
        {view == "game" && <Game />}
        {view == "leaderboard" && <Leaderboard />}
        {view == "rules" && <Rules/>}
        
      </div>
    );
  }
}

export default App;
