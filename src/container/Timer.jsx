import React from "react";
import PropTypes from "prop-types";
import styleConfig from "../styleConfig";

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

  componentDidUpdate() {
    const { onTimeOut, gameStatus } = this.props;
    const { timer } = this.state;

    if (timer === 999 || gameStatus === "Fail") {
      onTimeOut();
      clearInterval(this.timerId);
      this.timerId = 0;
    }

    if (!this.timerId && gameStatus === "Proceeding") {
      this.setState({ timer: 0 });

      this.timerId = setInterval(() => {
        this.setState(prev => {
          return { timer: prev.timer + 1 };
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { timer } = this.state;
    return (
      <div>
        <div className={`${styleConfig.header.base} grid-cols-2`}>
          <span>🕰</span>
          <span>{timer}</span>
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  onTimeOut: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
};

export default Timer;
