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
      win: false,
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

    const rows = [row, row + 1, row - 1];
    const cols = [col + 1, col - 1];

    for (let r of rows) {
      try {
        grid[r][col] = !grid[r][col];
      } catch (error) {}
    }

    for (let c of cols) {
      try {
        if (c < grid[0].length) {
          grid[row][c] = !grid[row][c];
        }
      } catch (error) {}
    }

    this.setState(() => ({ grid: grid }));
    this.checkWin();
  }

  checkWin() {
    const win = this.state.grid.every((val) =>
      val.every((val) => val === false)
    );
    this.setState(() => ({ win: win }));
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
