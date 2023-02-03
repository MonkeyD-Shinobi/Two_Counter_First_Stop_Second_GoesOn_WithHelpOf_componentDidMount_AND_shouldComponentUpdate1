import React from "react";
import App1 from "./App1";
import App2 from "./App2";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count > 10) return false;
    return true;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1
        };
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <App1 />
      </>
    );
  }
}

export default App;
