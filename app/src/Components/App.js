import React, { Component } from "react";
import "../App.css";
import Navbar from './Navbar';
import ProfilePic from './ProfilePic';
import Points from './Points'
import ScoreButton from './ScoreButton'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <section>
          <div className="left">
            <h2 className="games-won-left">1</h2>
            <ProfilePic/>
            <h1 className="score-left"> 8</h1>
            <img
              className="paddle-pic-left"
              src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537289738/Screen_Shot_2018-09-17_at_16.26.32_atdrl5.png"
            />
            <ScoreButton/>
          </div>
          <div className="right">
          <Points/>
            <ProfilePic/>
            <img
              className="paddle-pic-right"
              src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537289738/Screen_Shot_2018-09-17_at_16.26.32_atdrl5.png"
            />
            <ScoreButton/>
          </div>
        </section>
      </div>
    )
  }
}

export default App;