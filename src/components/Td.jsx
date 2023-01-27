import React from "react";
import PropTypes from "prop-types";
import { FLAG, MOUSE, FLAG_CONTENT, GAME_STATUS } from "../lib/constants";
import styleConfig from "../styleConfig";

class Td extends React.PureComponent {
  timerData = {};

  isMobileEvent = false;

  componentDidUpdate() {
    if (this.timerData.id) clearTimeout(this.timerData.id);
  }

  handleMouseDown = (e, index) => {
    if (e.button === MOUSE.RIGHT_MOUSE) return;

    if (this.isMobileEvent) {
      this.isMobileEvent = false;
      return;
    }

    const { onStickFlag } = this.props;

    this.timerData.id = setTimeout(() => {
      onStickFlag(index);
      delete this.timerData.id;
    }, 300);
  };

  handleMouseUp = (e, index) => {
    if (this.isMobileEvent) {
      this.isMobileEvent = false;
      return;
    }
    const {
      onStickFlag,
      onClickCell,
      onStickQuestionMark,
      content,
      onResetCell,
    } = this.props;

    if (!this.timerData.id && e.button === MOUSE.LEFT_MOUSE) return;

    if (e.button === MOUSE.RIGHT_MOUSE) {
      if (content === FLAG.EMPTY || content === FLAG.MINE) {
        return onStickFlag(index);
      }
    }

    clearTimeout(this.timerData.id);

    if (content === FLAG.MINE_FLAG) {
      return onStickQuestionMark(index);
    }

    if (content === FLAG.QUESTION_MARK) {
      return onResetCell(index);
    }

    return onClickCell(index);
  };

  render() {
    const { row, col, content, gameStatus } = this.props;

    return (
      <td
        className={`${
          gameStatus === "Start"
            ? styleConfig.cell.Proceeding[content]
            : styleConfig.cell[gameStatus][content]
        } m-10 h-6 min-h-full w-6 min-w-full cursor-pointer  rounded-md border-2 border-solid border-sky-500  p-1 text-[10px] shadow-inner sm:h-9 sm:w-9 sm:text-base`}
        onMouseDown={e => this.handleMouseDown(e, { row, col })}
        onMouseUp={e => this.handleMouseUp(e, { row, col })}
        onTouchStart={e => {
          this.handleMouseDown(e, { row, col });
          this.isMobileEvent = true;
        }}
        onTouchEnd={e => {
          this.handleMouseUp(e, { row, col });
          this.isMobileEvent = true;
        }}
        onContextMenu={e => e.preventDefault()}
        role="presentation"
      >
        <center>
          {content === FLAG.MINE && gameStatus === GAME_STATUS.FAIL
            ? FLAG_CONTENT.mine
            : FLAG_CONTENT[content]}
        </center>
      </td>
    );
  }
}

Td.propTypes = {
  onStickFlag: PropTypes.func.isRequired,
  onClickCell: PropTypes.func.isRequired,
  onStickQuestionMark: PropTypes.func.isRequired,
  onResetCell: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  content: PropTypes.number.isRequired,
  gameStatus: PropTypes.string.isRequired,
};

export default Td;
