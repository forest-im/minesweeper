/* eslint-disable default-param-last */
import { SELECT_MODE, CLICK_CELL } from "../actionTypes";
import { MODES, FLAG, GAME_STATUS } from "../../lib/constants";
import createRandomNumbers from "../../lib/utils/createRandomNumbers";

const initialState = {
  gameStatus: GAME_STATUS.PROCEEDING,
  mode: "easy",
  mines: 10,
  table: [],
};

function createNewTable(minesArr, rowCount, colCount) {
  return minesArr.reduce(
    (table, mine) => {
      const copyTable = [...table];
      const row = Math.floor((mine - 1) / colCount);
      const col = (mine - 1) % colCount;

      copyTable[row][col] = FLAG.MINE;

      return copyTable;
    },
    Array(rowCount)
      .fill(FLAG.EMPTY)
      .map(() => Array(colCount).fill(FLAG.EMPTY)),
  );
}

function createTableDataObj(table, row, col) {
  return {
    flag: table[row][col],
    row,
    col,
  };
}

function checkAround(table, row, col, mark) {
  if (table[row][col] !== FLAG.EMPTY || mark[`${row}-${col}`]) return;

  const copyMark = { ...mark };
  const copyTable = [...table];
  copyMark[`${row}-${col}`] = "visited";
  copyTable[row][col] = FLAG.OPENED;

  const aroundCellData = [];
  const aroundEmptyCellArray = [];

  if (table[row - 1]) {
    aroundCellData.push(
      createTableDataObj(table, row - 1, col - 1),
      createTableDataObj(table, row - 1, col),
      createTableDataObj(table, row - 1, col + 1),
    );
  }

  aroundCellData.push(
    createTableDataObj(table, row, col - 1),
    createTableDataObj(table, row, col + 1),
  );

  if (table[row + 1]) {
    aroundCellData.push(
      createTableDataObj(table, row + 1, col - 1),
      createTableDataObj(table, row + 1, col),
      createTableDataObj(table, row + 1, col + 1),
    );
  }

  while (aroundCellData.length) {
    const cellData = aroundCellData.pop();

    if (cellData.flag && cellData.flag !== FLAG.MINE) {
      aroundEmptyCellArray.push(cellData);
    }
  }

  if (aroundEmptyCellArray.length === FLAG.AROUND_ALL_EMPTY) {
    aroundEmptyCellArray.forEach(cell => {
      return checkAround(table, cell.row, cell.col, mark);
    });
  } else {
    copyTable[row][col] = FLAG.AROUND_ALL_EMPTY - aroundEmptyCellArray.length;
  }
}

const status = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MODE: {
      const { mode } = action.payload;

      const newX = MODES[mode.toUpperCase()].X;
      const newY = MODES[mode.toUpperCase()].Y;
      const newMines = MODES[mode.toUpperCase()].MINES;

      return {
        ...state,
        mode,
        mines: newMines,
        table: createNewTable(
          createRandomNumbers(newX * newY, newMines),
          newX,
          newY,
        ),
      };
    }
    case CLICK_CELL: {
      const newState = { ...state };
      newState.table = [...state.table];
      const { row, col } = action.payload.clickedCellIndex;

      if (newState.table[row][col] === 9) {
        return state;
      }

      if (newState.table[row][col] === -1) {
        newState.gameStatus = GAME_STATUS.FAIL;
        return newState;
      }

      const { table } = newState;

      checkAround(table, row, col, {});

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default status;
