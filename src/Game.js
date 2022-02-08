import { Component } from "react";
import { random } from "./helpers";
import Square from "./Square";
import "./Game.css";

class Game extends Component {
  static defaultProps = {
    grid: { x: 5, y: 5 },
  };

  constructor(props) {
    super(props);
    this.state = {
      grid: new Array(),
    };
    this.toggle = this.toggle.bind(this);
  }

  generateGrid() {
    let rows = [...Array(this.props.grid.y).keys()];
    let cols = [...Array(this.props.grid.x)];
    const grid = rows.map(() => cols.map(() => random([true, false])));

    this.setState(() => ({ grid: grid }));
  }

  toggle(row, col) {
    const { grid } = this.state;

    console.log(grid[row][col]);
  }

  render() {
    return (
      <div className="Game">
        {this.state.grid.map((row, idxRow) => (
          <div key={idxRow} className="Game-row">
            {row.map((isOn, idxCol) => (
              <Square
                key={`${idxRow}${idxCol}`}
                row={idxRow}
                col={idxCol}
                on={isOn}
                toggle={this.toggle}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.generateGrid();
  }
}

export default Game;
