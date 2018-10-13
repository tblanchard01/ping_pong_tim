import React, { Component } from "react";
import Player from "./Player";
import Paddle from "./Paddle";
import PlayerPic from "./PlayerPic";
import fetch from "node-fetch";
const PLAYER_1 = 1;
const PLAYER_2 = 2;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Points: 0,
      player2Points: 0,
      winner: null,
      toServe: 0,
      player1pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg/600px-Default_profile_picture_%28male%29_on_Facebook.jpg",
      player2pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg/600px-Default_profile_picture_%28male%29_on_Facebook.jpg",
      player1Id: null,
      player2Id: null,
      users: []
    };
  }

  setPlayer(player, id) {
    const userobj = this.state.users.find(x => x._id === id);

    if (player === 1) {
      this.setState({ player1pic: userobj.slack_image, player1Id: id });
    } else {
      this.setState({ player2pic: userobj.slack_image, player2Id: id });
    }
  }

  findWinner(p1 = this.state.player1Points, p2 = this.state.player2Points) {
    if (p1 >= 21 && p2 <= p1 - 2) {
      this.setState({ winner: 1 });
    }
    if (p2 >= 21 && p1 <= p2 - 2) {
      this.setState({ winner: 2 });
    }
  }

  findNextServe() {
    if ((this.state.player1Points + this.state.player2Points) % 5 === 0) {
      this.swapServes();
    }
  }

  swapServes() {
    this.state.toServe === PLAYER_1 ? this.setState({ toServe: PLAYER_2 }) : this.setState({ toServe: PLAYER_1 });
  }

  scoreButtonClick(player) {
    if (this.state.toServe === 0) {
      this.setState({ toServe: player });
    } else if (player === PLAYER_1) {
      this.setState({ player1Points: this.state.player1Points + 1 }, () => {
        this.findNextServe();
        this.findWinner();
      });
    } else {
      this.setState({ player2Points: this.state.player2Points + 1 }, () => {
        this.findNextServe();
        this.findWinner();
      });
    }
  }

  componentDidMount() {
    const url = "https://paddlr.herokuapp.com/api/users";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data
        });
      });
  }

  render() {
    console.log(this.state + "current state ");
    const { player1Points, player2Points, toServe, player1pic, player2pic, player1Id, player2Id, users } = this.state;

    if (!this.state.winner) {
      return (
        <div>
          <div className="left">
            <Player number ={1} users={users} updatePlayer={id => this.setPlayer(1, id)} toServe={toServe} 
            playerId={player1Id} 
            pic={player1pic} points={player1Points} onScoreIncremented={() => this.scoreButtonClick(PLAYER_1)} />
            {toServe === PLAYER_1 ? <Paddle direction="paddle-pic-left" /> : null}
          </div>
          <div className="right">
          <Player number={2} users={users} updatePlayer={id => this.setPlayer(2, id)} toServe={toServe} 
            playerId={player2Id} 
            pic={player2pic} points={player2Points} onScoreIncremented={() => this.scoreButtonClick(PLAYER_2)} />

            {toServe === PLAYER_2 ? <Paddle direction="paddle-pic-right" /> : null}
          </div>
          <button onClick={() => console.log(this.state)}>show me state</button>
        </div>
      );
    }
    return (
      <div>
        <h1 className="winner_header"> The winner is player {this.state.winner}! </h1>
        <img src={this.state.winner === 1 ? player1pic : player2pic} className="winner_pic" />
        <button
          className="play_again_button"
          onClick={() => {
            this.setState({ winner: null, player1Points: 0, player2Points: 0, winner: null, toServe: 0 });
          }}
        >
          Play Again?
        </button>

        {console.log(this.state)}
      </div>
    );
  }
}

export default Game;
