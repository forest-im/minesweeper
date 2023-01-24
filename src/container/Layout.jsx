import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import withParams from "../components/withParams";

class Layout extends React.PureComponent {
  render() {
    const { params } = this.props;

    return (
      <div className="flex justify-center flex-col items-center  border-solid border-2 border-sky-500 p-10">
        {params.mode ? <Header /> : <div>모드를 선택하세요</div>}
        <Outlet />
      </div>
    );
  }
}

Layout.propTypes = {
  params: PropTypes.object.isRequired,
};

export default withParams(Layout);
