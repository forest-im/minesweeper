import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  setProceedingStatus,
  startGame,
  timeOut,
  toggleModal,
} from "../redux/action";
import styleConfig from "../styleConfig";
import { GAME_STATUS } from "../lib/constants";
import withParams from "../components/withParams";
import Timer from "../components/Timer";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentStatus: "😊",
    };
  }

  componentDidUpdate() {
    const { gameStatus } = this.props;
    const { currentStatus } = this.state;

    if (gameStatus === GAME_STATUS.PROCEEDING && currentStatus === "😊") return;

    switch (gameStatus) {
      case GAME_STATUS.START: {
        return this.setState({ currentStatus: "😊" });
      }
      case GAME_STATUS.PROCEEDING: {
        return this.setState({ currentStatus: "😊" });
      }
      case GAME_STATUS.FAIL: {
        return this.setState({ currentStatus: "💀" });
      }
      case GAME_STATUS.SUCCESS: {
        return this.setState({ currentStatus: "🤩" });
      }
      default: {
        break;
      }
    }
  }

  render() {
    const {
      params,
      gameStatus,
      minesCount,
      isModalShowing,
      dispatchTimeOut,
      dispatchStartGame,
      dispatchToggleModal,
      dispatchSetProceedingStatus,
    } = this.props;
    const { currentStatus } = this.state;

    return (
      <>
        <div className="grid grid-flow-col place-items-center gap-3 sm:gap-10">
          <Link to="/">HOME</Link>
          <button
            className="cursor-pointer"
            type="button"
            onClick={dispatchToggleModal}
          >
            MENU
          </button>
          {gameStatus === GAME_STATUS.FAIL && (
            <button
              className="cursor-pointer"
              onClick={() => dispatchStartGame(params.mode)}
              type="button"
            >
              RETRY
            </button>
          )}
        </div>
        <div className="my-5 grid grid-cols-3 place-items-center gap-3 sm:gap-10">
          <div className="grid place-items-center">
            <Timer
              isModalShowing={isModalShowing}
              gameStatus={gameStatus}
              onTimeOut={dispatchTimeOut}
              setProceedingStatus={dispatchSetProceedingStatus}
            />
          </div>
          <div>
            <div className={styleConfig.header.base}>{currentStatus}</div>
          </div>
          <div className="grid place-items-center">
            <div className={`${styleConfig.header.base} grid-cols-2`}>
              <span>💣</span>
              <span>{minesCount}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  params: PropTypes.object.isRequired,
  gameStatus: PropTypes.string.isRequired,
  minesCount: PropTypes.number.isRequired,
  isModalShowing: PropTypes.bool.isRequired,
  dispatchTimeOut: PropTypes.func.isRequired,
  dispatchStartGame: PropTypes.func.isRequired,
  dispatchToggleModal: PropTypes.func.isRequired,
  dispatchSetProceedingStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.status,
  ...state.base,
});

const mapDispatchToProps = {
  dispatchTimeOut: timeOut,
  dispatchStartGame: startGame,
  dispatchToggleModal: toggleModal,
  dispatchSetProceedingStatus: setProceedingStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Header));
