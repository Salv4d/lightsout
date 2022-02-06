import { Component } from "react";
import "./Square.css";

class Square extends Component {
  render() {
    return <div className={`Square ${this.props.on ? "Square-on" : ""}`}></div>;
  }
}

export default Square;
