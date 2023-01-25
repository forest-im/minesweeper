import React from "react";
import { useParams } from "react-router-dom";

const withParams = Child => {
  return function (props) {
    const params = useParams();

    return <Child {...props} params={params} />;
  };
};

export default withParams;
