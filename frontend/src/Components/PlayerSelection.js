import React, { Component } from "react";

class PlayerSelection extends Component {
  render() {
    return (
      <div className="player_selection">
        Select player:
        <select onChange={(e) => {
          this.props.updatePlayer(e.target.value)
        }}>
          {this.props.users.map(user => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default PlayerSelection;
