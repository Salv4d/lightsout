import { Component } from "react";
import Square from "./Square";
import "./Game.css";

class Game extends Component {
  static defaultProps = {
    grid: { x: 7, y: 7 },
  };

  render() {
    return (
      <div className="Game">
        <Square />
      </div>
    );
  }
}

export default Game;
