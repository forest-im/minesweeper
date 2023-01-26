import React from "react";
import PropTypes from "prop-types";

class Modal extends React.PureComponent {
  render() {
    const { children, onClick } = this.props;

    return (
      <div
        className="fixed z-10 flex h-screen w-screen flex-col items-center justify-center overflow-hidden overscroll-y-none bg-gray-700/50"
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex="0"
      >
        {children}
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
