/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withParams from "../components/withParams";
import { selectMode, clickCell } from "../redux/action";
import Td from "../components/Td";

class Game extends React.Component {
  componentDidMount() {
    const { params } = this.props;
    this.props.selectMode(params.mode);
  }

  componentDidUpdate() {
    if (this.props.gameStatus === "fail") {
      console.log("game over");
    }
  }

  handleClickEvent = index => {
    this.props.clickCell(index);
  };

  render() {
    const { table, gameStatus } = this.props;

    return (
      <div>
        <div className="flex flex-col">
          {gameStatus === "Fail" && <div>fail</div>}
          <table className="table-auto">
            <tbody>
              {table.map((rowArr, row) => {
                return (
                  <tr key={row}>
                    {rowArr.map((content, col) => (
                      <Td
                        key={col}
                        row={row}
                        col={col}
                        content={content}
                        click={this.handleClickEvent}
                      />
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  selectMode: PropTypes.func.isRequired,
  clickCell: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  table: PropTypes.array.isRequired,
  gameStatus: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  x: state.status.x,
  y: state.status.y,
  table: state.status.table,
  gameStatus: state.status.gameStatus,
});

const mapDispatchToProps = {
  selectMode,
  clickCell,
};

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Game));
