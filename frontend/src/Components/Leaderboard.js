import React, { Component } from "react";

class Leaderboard  extends Component {
  render() {
    return (
      <div>
      This is  is the leaderboard
      <table>   
  <tbody>
    <tr>
    	<th>Rank</th>
    	<th>Username</th>
    	<th>Points</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Jessie</td>
      <td>102,345</td>
	</tr>
    <tr>
      <td>2</td>
      <td>Bob</td>
      <td>2,321</td>
	</tr>
  </tbody>
</table>
       
      </div>
    );
  }
}

export default Leaderboard;
