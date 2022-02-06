import { Component } from "react";
import { random } from "./helpers";
import Square from "./Square";
import "./Game.css";

class Game extends Component {
  static defaultProps = {
    grid: { x: 5, y: 5 },
  };

  generateGrid() {
    let rows = [...Array(this.props.grid.y).keys()].map((y) => y + 1);
    let cols = [...Array(this.props.grid.x).keys()].map((x) => x + 1);

    return rows.map((row) => cols.map((col) => row * 10 + col));
  }

  render() {
    return (
      <div className="Game">
        {this.generateGrid().map((row, idx) => (
          <div key={idx} className="Game-row">
            {row.map((loc) => (
              <Square key={loc} loc={loc} on={random([true, false])} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Game;
