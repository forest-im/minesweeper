import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import { startGame, timeOut, toggleModal } from "../redux/action";
import styleConfig from "../styleConfig";
import withParams from "../components/withParams";

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

    if (gameStatus === "Proceeding" && currentStatus === "😊") return;

    switch (gameStatus) {
      case "Proceeding": {
        return this.setState({ currentStatus: "😊" });
      }
      case "Fail": {
        return this.setState({ currentStatus: "💀" });
      }
      case "Success": {
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
          {gameStatus === "Fail" && (
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
};

const mapStateToProps = state => ({
  ...state.status,
  ...state.base,
});

const mapDispatchToProps = {
  dispatchTimeOut: timeOut,
  dispatchStartGame: startGame,
  dispatchToggleModal: toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Header));
