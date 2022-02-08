import { Component } from "react";
import "./Square.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggle(this.props.row, this.props.col);
  }

  render() {
    return (
      <div
        className={`Square ${this.props.on ? "Square-on" : ""}`}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Square;
