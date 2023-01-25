/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withParams from "../components/withParams";
import {
  startGame,
  clickCell,
  stickMineFlag,
  stickQuestionMark,
  resetCell,
} from "../redux/action";
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
      gameStatus,
      dispatchClickCell,
      dispatchStickMingFlag,
      dispatchStickQuestionMark,
      dispatchResetCell,
    } = this.props;

    return (
      <div>
        <div className="flex flex-col">
          <div>{gameStatus}</div>
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
                        onClickCell={dispatchClickCell}
                        onStickFlag={dispatchStickMingFlag}
                        onStickQuestionMark={dispatchStickQuestionMark}
                        onResetCell={dispatchResetCell}
                        onMouseDown={dispatchClickCell}
                        click={dispatchClickCell}
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
  dispatchStartGame: PropTypes.func.isRequired,
  dispatchClickCell: PropTypes.func.isRequired,
  dispatchStickMingFlag: PropTypes.func.isRequired,
  dispatchStickQuestionMark: PropTypes.func.isRequired,
  dispatchResetCell: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  table: PropTypes.array.isRequired,
  gameStatus: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  row: state.status.row,
  col: state.status.col,
  table: state.status.table,
  gameStatus: state.status.gameStatus,
});

const mapDispatchToProps = {
  dispatchStartGame: startGame,
  dispatchClickCell: clickCell,
  dispatchStickMingFlag: stickMineFlag,
  dispatchStickQuestionMark: stickQuestionMark,
  dispatchResetCell: resetCell,
};

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Game));
