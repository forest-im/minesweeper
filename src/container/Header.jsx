import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Timer from "./Timer";

class Header extends React.PureComponent {
  render() {
    const { mode, minesCount } = this.props;

    return (
      <div className="flex flex-row justify-between w-1/2 text-2xl border-solid border-2 border-sky-500 p-10">
        <Timer />
        <div>{mode}</div>
        <div>😊</div>
        <div>{minesCount}</div>
      </div>
    );
  }
}

Header.propTypes = {
  mode: PropTypes.string.isRequired,
  minesCount: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  ...state.status,
});

export default connect(mapStateToProps, null)(Header);
