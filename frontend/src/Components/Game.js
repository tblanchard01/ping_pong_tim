import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { setPlayerScore, setServe, endGame, sendMatchToLeaderboard } from "../redux/actions/game";
import { getWinningPlayer } from "../helpers/winningPlayer";

class Game extends Component {
  componentDidMount = () => {
    const { players, history, endGame } = this.props;
    if (!players.every(player => player.id)) {
      endGame();
      history.replace("/");
    }
  };

  downgradeWinner = () => {
    const { players, winningPlayer, setPlayerScore } = this.props;
    // First we need to get the index of the winning player
    const winningPlayerIndex = players.map(player => player.id).indexOf(winningPlayer[0].id);
    // We need to go 2 serves back, because
    // setPlayerScore will automatically
    // increment the serves by 1. We want
    // ultimately to be 1 serve back.
    setServe(-2);
    setPlayerScore(winningPlayerIndex, -1);
  };

  finishGameAndSendResultToLeaderboard = () => {
    this.props.endGame();
    this.props.sendMatchToLeaderboard();
  };

  render() {
    const { winningPlayer, players, setPlayerScore, currentServer, inProgress } = this.props;
    const displayedPlayers = winningPlayer && !inProgress ? winningPlayer : players;
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {displayedPlayers.map((player, index) => (
            <section key={player._id || index}>
              <figure>
                <img src={player.slack_image} alt={player.id} />
                <figcaption>{player.name}</figcaption>
              </figure>
              {winningPlayer ? (
                winningPlayer[0].id === player.id ? (
                  "WON"
                ) : (
                  "LOST"
                )
              ) : (
                <div>
                  <button
                    onClick={() => {
                      setPlayerScore(index, 1);
                    }}
                  >
                    +
                  </button>
                  <button
                    disabled={player.score === 0}
                    onClick={() => {
                      setPlayerScore(index, -1);
                    }}
                  >
                    -
                  </button>
                </div>
              )}
              <div>Score: {player.score}</div>
              {/* This is my latest useless implementation `player.currentServer` 
              which it can't read because I haven't given Game the incrementScore() prop
              which dispatches the serving functions.
              I'm just not sure if `setServe()` and `swapServe()` should be
              props too - it feels like they should. */}
              {currentServer === index && !winningPlayer && <div>Serving</div>}
            </section>
          ))}
        </div>
        {!!winningPlayer && inProgress ? (
          <div>
            Someone has won. End game?
            <button onClick={this.finishGameAndSendResultToLeaderboard}>End game</button>
            <button onClick={this.downgradeWinner}>Whoops! Nobody won</button>
          </div>
        ) : null}
      </div>
    );
  }
}

Game.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({})),
  winningPlayer: PropTypes.arrayOf(PropTypes.shape({})),
  history: PropTypes.shape({}).isRequired,
  setPlayerScore: PropTypes.func.isRequired,
  currentServer: PropTypes.number.isRequired,
  // swapServes: Proptypes.func.isRequired,
};

const mapStateToProps = state => {
  const players = state.game.players.map(player => ({
    ...state.users.users.find(user => user._id === player.id),
    ...player,
  }));
  return {
    players,
    currentServer: state.game.currentServer,
    inProgress: state.game.inProgress,
    winningPlayer: getWinningPlayer(players),
  };
};

const mapDispatchToProps = {
  setPlayerScore,
  endGame,
  sendMatchToLeaderboard,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Game)
);
