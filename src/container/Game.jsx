/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  startGame,
  clickCell,
  stickMineFlag,
  stickQuestionMark,
  resetCell,
} from "../redux/action";
import withParams from "../components/withParams";
import Td from "../components/Td";

class Game extends React.Component {
  componentDidMount() {
    const { params, dispatchStartGame } = this.props;
    dispatchStartGame(params.mode);
  }

  componentDidUpdate() {
    const { gameStatus } = this.props;

    if (gameStatus === "fail") {
      console.log("game over");
    }

    if (gameStatus === "success") {
      console.log("success");
    }
  }

  render() {
    const {
      table,
      mode,
      gameStatus,
      dispatchClickCell,
      dispatchStickMingFlag,
      dispatchStickQuestionMark,
      dispatchResetCell,
    } = this.props;

    return (
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="text-white">
            {gameStatus === "Success" ? "Success!" : mode.toUpperCase()}
          </div>
          <table className="table-auto">
            <tbody>
              {table.map((rowArr, row) => {
                return (
                  <tr key={row}>
                    {rowArr.map((content, col) => (
                      <Td
                        key={col}
                        row={row}
                        col={col}
                        content={content}
                        gameStatus={gameStatus}
                        onClickCell={dispatchClickCell}
                        onStickFlag={dispatchStickMingFlag}
                        onStickQuestionMark={dispatchStickQuestionMark}
                        onResetCell={dispatchResetCell}
                        onMouseDown={dispatchClickCell}
                      />
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  params: PropTypes.object.isRequired,
  table: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  gameStatus: PropTypes.string.isRequired,
  dispatchStartGame: PropTypes.func.isRequired,
  dispatchClickCell: PropTypes.func.isRequired,
  dispatchStickMingFlag: PropTypes.func.isRequired,
  dispatchStickQuestionMark: PropTypes.func.isRequired,
  dispatchResetCell: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.status,
  ...state.base,
});

const mapDispatchToProps = {
  dispatchStartGame: startGame,
  dispatchClickCell: clickCell,
  dispatchStickMingFlag: stickMineFlag,
  dispatchStickQuestionMark: stickQuestionMark,
  dispatchResetCell: resetCell,
};

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Game));
