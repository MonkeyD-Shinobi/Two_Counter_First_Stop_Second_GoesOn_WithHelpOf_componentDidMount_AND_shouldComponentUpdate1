import React from "react";

class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      isPause: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isPause) return false;
    return true;
  }

  componentDidMount() {
    this.interval1 = setInterval(() => {
      this.setState((prevState) => {
        return {
          count1: prevState.count1 + 1
        };
      });
    }, 1000);
  }

  handlePause = () => {
    this.setState((prevState) => {
      return {
        isPause: !prevState.isPause
      };
    });
  };

  clearInterval = () => {
    clearInterval(this.interval1);
  };

  render() {
    return (
      <>
        <div>{this.state.count1}</div>
        <button onClick={this.handlePause}>pause</button>
      </>
    );
  }
}

export default App1;
