/* eslint-disable react/void-dom-elements-no-children */
import React from "react";
import PropTypes from "prop-types";
import { FLAG, MOUSE } from "../lib/constants";

class Td extends React.PureComponent {
  timerData = {};

  componentDidUpdate() {
    if (this.timerData.id) clearTimeout(this.timerData.id);
  }

  getContent() {
    const { content } = this.props;

    switch (content) {
      case FLAG.MINE:
        return "🍎";
      case FLAG.OPENED:
        return "✨";
      case FLAG.EMPTY:
        return "";
      case FLAG.MINE_FLAG:
        return "🏳️‍🌈";
      case FLAG.QUESTION_MARK:
        return "?";
      case FLAG.AROUND_ALL_EMPTY:
        return "0";

      default: {
        return content;
      }
    }
  }

  handleMouseDown = (e, index) => {
    if (e.button === MOUSE.RIGHT_MOUSE) return;

    const { onStickFlag } = this.props;

    this.timerData.id = setTimeout(() => {
      onStickFlag(index);
      delete this.timerData.id;
    }, 300);
  };

  handleMouseUp = (e, index) => {
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
    const { row, col } = this.props;

    return (
      <td
        className="p-5 text-center border-solid border-2 border-sky-500 cursor-pointer"
        onMouseDown={e => this.handleMouseDown(e, { row, col })}
        onMouseUp={e => this.handleMouseUp(e, { row, col })}
        onContextMenu={e => e.preventDefault()}
        role="presentation"
      >
        {this.getContent()}
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
};

export default Td;
