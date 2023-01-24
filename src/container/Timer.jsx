import React from "react";

class Timer extends React.Component {
  timerId;

  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(prev => {
        return { timer: prev.timer + 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { timer } = this.state;
    return <div>{timer}</div>;
  }
}

export default Timer;
