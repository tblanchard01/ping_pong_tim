import React, { Component } from "react";

class Points extends Component {
   render() {
    return (
      <div>
        <h1 className= {this.props.number === 1? "score-left" : "score-right" }> {this.props.points}</h1>
      </div>
    );
  }
}

export default Points;
