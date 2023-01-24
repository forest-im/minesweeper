import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Menu extends React.PureComponent {
  render() {
    const { mode } = this.props;

    return (
      <Link
        to={`/game/${mode.toLowerCase()}`}
        className="bg-black text-center text-white m-4 rounded-md p-2 hover:bg-slate-600 w-44"
      >
        {mode}
      </Link>
    );
  }
}

export default Menu;

Menu.propTypes = {
  mode: PropTypes.string.isRequired,
};
