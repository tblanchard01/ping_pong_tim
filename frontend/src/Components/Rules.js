import React, { Component } from "react";

class Rules extends Component {
  render() {
    return (
      <div className = "rules-container">
        <h2> Scoring</h2>
        <p>A match is played best 3 of 5 games (or 4/7 or 5/9). For each game, the first player to reach 11 points wins that game, however a game must be won by at least a two point margin. A point is scored after each ball is put into play (not just when the server wins the point as in volleyball). The edges of the table are part of the legal table surface, but not the sides. </p>

        <h2>Flow of the match </h2>
        <p>Each player serves two points in a row and then switch server. However, if a score of 10-10 is reached in any game, then each server serves only one point and then the server is switched. After each game, the players switch side of the table. In the final game (ie 5th game), the players switch side again after either player reaches 5 points. </p>

        <h2>Legal serve </h2>
        <p>The ball must rest on an open hand palm. Then it must be tossed up at least 6 inches and struck so the ball first bounces on the server's side and then the opponent's side. If the serve is legal except that it touches the net, it is called a let serve. Let serves are not scored and are reserved. </p>

        <h2>Equipment </h2>
        <p>The paddle should have a red and a black side. The ball should be either orange or white and 40 mm in size. The table should be 2.74 meters long, 1.525 m wide, and 0.76 m high.</p>
      </div>
    );
  }
}

export default Rules;
