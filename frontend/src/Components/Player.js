import React, { Component } from "react";
import Points from "./Points";
import PlayerPic from "./PlayerPic";
import PlayerSelection from "./PlayerSelection";

class Player extends Component {
  render() {
    const showScoreButton = (<button onClick={() => this.props.onScoreIncremented()} className="score_button">
    {this.props.toServe === 0 ? "To Serve?" : "Score"}
  </button>) 

    return (
      <div>
        <Points points={this.props.points} />
        <div> 
        {this.props.playerId ? showScoreButton : <PlayerSelection users = {this.props.users}
         updatePlayer = {this.props.updatePlayer} />   }

          
        </div>
        <PlayerPic pic={this.props.pic} />
      </div>
    );
  }
}

export default Player;
