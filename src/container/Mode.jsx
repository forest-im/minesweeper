import React from "react";
import { Link } from "react-router-dom";
import { MODES } from "../lib/constants";

class Mode extends React.PureComponent {
  render() {
    return (
      <div className="flex flex-col">
        {Object.keys(MODES).map(mode => (
          <Link
            key={mode}
            to={`/game/${mode.toLowerCase()}`}
            className="bg-black text-center text-white m-4 rounded-md p-2 hover:bg-slate-600 w-44"
          >
            {mode}
          </Link>
        ))}
      </div>
    );
  }
}

export default Mode;
