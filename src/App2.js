import React from "react";

class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      intervalId: 0
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.isPause) return false;
  //   return true;
  // }

  componentDidMount() {
    this.interval1 = setInterval(() => {
      this.setState((prevState) => {
        return {
          ...prevState,
          count1: prevState.count1 + 1
        };
      });
    }, 1000);
  }

  handlePause = () => {
    clearInterval(this.interval1);
    // this.setState((prevState) => {
    //   return {
    //     ...prevState,
    //     isPause: !prevState.isPause
    //   };
    // });
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState((prevState) => {
        return {
          ...prevState,
          intervalId: 0
        };
      });
      return;
    }

    const newIntervalId = setInterval(() => {
      console.log("i m in new setinterval");
      this.setState((prevState) => {
        return {
          ...prevState,
          count: prevState.count + 1
        };
      });
    }, 1000);

    this.setState((prevState) => {
      return {
        ...prevState,
        intervalId: newIntervalId
      };
    });
  };

  // clearInterval = () => {
  //   clearInterval(this.interval1);
  // };

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
