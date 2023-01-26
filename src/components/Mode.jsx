import React from "react";
import { Link } from "react-router-dom";
import { MODES } from "../lib/constants";
import Menu from "./Menu";

class Mode extends React.PureComponent {
  render() {
    return (
      <div className="flex w-fit flex-col rounded-xl bg-amber-300 shadow-inner">
        {Object.keys(MODES).map(mode => (
          <Link key={mode} to={`/game/${mode.toLowerCase()}`}>
            <Menu>{mode.toUpperCase()}</Menu>
          </Link>
        ))}
      </div>
    );
  }
}

export default Mode;
