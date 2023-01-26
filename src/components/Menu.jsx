import React from "react";
import PropTypes from "prop-types";

class Menu extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="m-6 rounded border-b-4 border-blue-700 bg-blue-500 py-2 px-4 text-center text-lg font-bold text-white hover:border-blue-500 hover:bg-blue-400">
        {children}
      </div>
    );
  }
}

export default Menu;

Menu.propTypes = {
  children: PropTypes.string.isRequired,
};
