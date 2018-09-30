import React, { Component } from "react";

class PlayerSelection extends Component {
  render() {
    return (
      <div className="player_selection">
        Select player:
        <select onChange={(e) => console.log(e.target.value)}>
          {this.props.users.map(user => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default PlayerSelection;
