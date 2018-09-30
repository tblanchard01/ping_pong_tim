import React, { Component } from "react";

class PlayerSelection extends Component {
  render() {
    return (
      <div className="player_selection">
        Select player:
        <form>
          <fieldset>
            <select id="myList">
              <option disabled selected value>
                {" "}
                -- Please select a player --{" "}
              </option>


{/* var result = arr.map(person => ({ value: person.id, text: person.name }));
console.log(result) */}

              {this.props.users.map(user => ( ( <option value="1">{user.name}</option>))) }

            </select>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default PlayerSelection;
