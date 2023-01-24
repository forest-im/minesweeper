import React from "react";
import PropTypes from "prop-types";

class Td extends React.PureComponent {
  getContent = () => {
    const { content } = this.props;
    switch (content) {
      case -1:
        return "🍎";
      case 11:
        return "flag";
      case 100:
        return "";
      case 9:
        return "open";
      default: {
        return content;
      }
    }
  };

  render() {
    const { row, col, click } = this.props;

    return (
      <td
        className="p-5 text-center border-solid border-2 border-sky-500 cursor-pointer"
        onClick={() => click({ row, col })}
        onKeyUp={click}
        role="presentation"
      >
        {this.getContent()}
      </td>
    );
  }
}

Td.propTypes = {
  click: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  content: PropTypes.number.isRequired,
};

export default Td;
