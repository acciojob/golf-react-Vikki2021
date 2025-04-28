import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    // Set renderBall to true when button is clicked
    this.setState({ renderBall: true });
  }

  handleKeyDown(event) {
    if (event.keyCode === 39) {
      // 39 = ArrowRight
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: newPos + "px" },
        };
      });
    }
  }

  componentDidMount() {
    // Add event listener on mount
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up event listener on unmount (good practice)
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
