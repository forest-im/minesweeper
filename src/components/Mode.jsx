import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MODES } from "../lib/constants";
import Menu from "./Menu";

class Mode extends React.PureComponent {
  render() {
    const { onClick } = this.props;

    return (
      <div className="flex w-fit flex-col rounded-xl bg-amber-300 shadow-inner">
        {Object.keys(MODES).map(mode => (
          <div
            onClick={() => onClick(mode.toLowerCase())}
            onKeyDown={() => onClick(mode.toLowerCase())}
            role="button"
            tabIndex="0"
            key={mode}
          >
            <Link to={`/game/${mode.toLowerCase()}`}>
              <Menu>{mode.toUpperCase()}</Menu>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

Mode.propTypes = {
  onClick: PropTypes.func,
};

Mode.defaultProps = {
  onClick: () => {},
};

export default Mode;
