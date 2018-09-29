import React, { Component } from "react";

class PlayerSelection extends Component {
  render() {
    return (

        <div className = "player_selection">
      Select player:
        <form>
       <fieldset>
             <select id = "myList">
             <option disabled selected value> -- Please select a player -- </option>
 
             <option value = "1">Trisha</option>
               <option value = "2">Susan</option>
               <option value = "3">Anglea</option>
               <option value = "4">Roger </option>
               <option value = "5">David</option>
             </select>
        
       </fieldset>
    </form>
    </div>
      
    );
  }
}

export default PlayerSelection;
