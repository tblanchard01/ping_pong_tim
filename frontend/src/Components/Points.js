import React, { Component } from "react";

class Points extends Component {
   render() {
    return (
      <div>
        <h1 className="score-left">{this.props.points}</h1>
      </div>
    );
  }
}

export default Points;




// let p2_score = 0;
// let winner = null;
//
// find_winner(p1, p2) {
//   if ((p1 >= 21) && (p2 <= p1 - 2)) {
//     winner = ("player_1");
//   }
//   if ((p2 >= 21) && (p1 <= p2 - 2)) {
//     winner =("player_2");
//   }
// }
//
// print_p1_score = () => console.log("p1 score: " + p1_score);
// print_p2_score = () => console.log("p2 score: " + p2_score);
// declare_winner = winner => console.log("the winner is: " + winner);
// print_p1_score();
// print_p2_score();
//
// document.addEventListener("keydown", e => {
//   const keyName = e.key;
//   if (keyName == "q") {
//     p1_score += 1;
//     print_p1_score();
//    if (p1_score >= 21 && p2_score <= p1_score - 2) {
//        declare_winner("player_1");
//     }
//   }
//   if (keyName == "p") {
//     p2_score += 1;
//     print_p2_score();
//     if (p2_score >= 21 && p1_score <= p2_score - 2) {
//       declare_winner("player_2");
//     }
//   }
// });
