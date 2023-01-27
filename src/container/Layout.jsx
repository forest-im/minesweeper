import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { toggleModal } from "../redux/action";
import withParams from "../components/withParams";
import WelcomeModal from "../components/WelcomeModal";
import Modal from "../components/Modal";
import Mode from "../components/Mode";
import Header from "./Header";

class Layout extends React.PureComponent {
  componentDidMount() {
    const { dispatchToggleModal } = this.props;

    if (sessionStorage.getItem("welcomeMessage")) return;

    dispatchToggleModal();
    sessionStorage.setItem("welcomeMessage", true);
  }

  render() {
    const { params, isModalShowing, dispatchToggleModal } = this.props;

    return (
      <div className="flex h-full justify-center">
        {isModalShowing && (
          <Modal onClick={dispatchToggleModal}>
            {params.mode ? <Mode /> : <WelcomeModal />}
          </Modal>
        )}
        <div className="m-20 flex min-w-full flex-col items-center sm:w-100 md:w-120">
          <div className="flex h-full min-h-[35rem] flex-col items-center rounded-xl bg-blue-400 p-7 sm:p-7">
            {params.mode ? (
              <Header />
            ) : (
              <div className="mb-10 mt-2 text-base font-bold text-white sm:text-2xl">
                SELECT GAME MODE
              </div>
            )}
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  params: PropTypes.object.isRequired,
  isModalShowing: PropTypes.bool.isRequired,
  dispatchToggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.status,
  ...state.base,
});

const mapDispatchToProps = {
  dispatchToggleModal: toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Layout));
