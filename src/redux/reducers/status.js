/* eslint-disable default-param-last */
import {
  START_GAME,
  CLICK_CELL,
  STICK_MINE_FLAG,
  STICK_QUESTION_MARK,
  RESET_CELL,
} from "../actionTypes";
import { MODES, FLAG, GAME_STATUS } from "../../lib/constants";
import { checkAround, createNew2DArray, mappingMinesToTable } from "../utils";

const initialState = {
  gameStatus: GAME_STATUS.PROCEEDING,
  mode: "easy",
  table: [],
  row: 0,
  col: 0,
  minesCount: 0,
  minesIndexObj: {},
  finishCellCount: 0,
};

const status = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME: {
      const { mode } = action.payload;

      return {
        ...state,
        mode,
        row: MODES[mode].ROW,
        col: MODES[mode].COL,
        table: createNew2DArray(MODES[mode].ROW, MODES[mode].COL),
        minesCount: MODES[mode].MINES_COUNT,
      };
    }
    case CLICK_CELL: {
      const newMinesIndexObj = state.minesIndexObj;
      const { row, col } = action.payload.clickedCellIndex;
      const newTable = Object.keys(state.minesIndexObj).length
        ? [...state.table]
        : mappingMinesToTable(
            state.row,
            state.col,
            state.minesCount,
            state.table,
            state.minesIndexObj,
          );

      if (newTable[row][col] === FLAG.MINE) {
        return {
          ...state,
          gameStatus: GAME_STATUS.FAIL,
        };
      }

      if (newTable[row][col] > 0 && newTable[row][col] < 10) {
        return state;
      }

      const visitedCell = {};

      checkAround(newTable, row, col, visitedCell);

      visitedCell[`${row}-${col}`] = "visited";

      const newFinishCellCount =
        state.finishCellCount + Object.keys(visitedCell).length;

      const newGameStatus =
        newFinishCellCount === state.row * state.col
          ? GAME_STATUS.SUCCESS
          : GAME_STATUS.PROCEEDING;

      return {
        ...state,
        table: newTable,
        gameStatus: newGameStatus,
        finishCellCount: newFinishCellCount,
        minesIndexObj: newMinesIndexObj,
      };
    }
    case STICK_MINE_FLAG: {
      const newState = { ...state };
      const { row, col } = action.payload.clickedCellIndex;

      if (state.table[row][col] === FLAG.MINE_FLAG) return state;

      newState.table = [...state.table];

      newState.table[row][col] = FLAG.MINE_FLAG;

      newState.finishCellCount = state.minesIndexObj[`${row}-${col}`]
        ? state.finishCellCount + 1
        : state.finishCellCount;

      newState.gameStatus =
        newState.finishCellCount === state.row * state.col
          ? GAME_STATUS.SUCCESS
          : GAME_STATUS.PROCEEDING;

      return newState;
    }
    case STICK_QUESTION_MARK: {
      const newState = { ...state };
      const { row, col } = action.payload.clickedCellIndex;

      newState.table = [...state.table];

      newState.table[row][col] = FLAG.QUESTION_MARK;

      newState.finishCellCount = state.minesIndexObj[`${row}-${col}`]
        ? state.finishCellCount - 1
        : state.finishCellCount;

      return newState;
    }
    case RESET_CELL: {
      const newState = { ...state };
      const { row, col } = action.payload.clickedCellIndex;

      newState.table = [...state.table];

      if (state.minesIndexObj[`${row}-${col}`]) {
        newState.table[row][col] = FLAG.MINE;

        newState.finishCellCount = state.finishCellCount - 1;

        return newState;
      }

      newState.table[row][col] = FLAG.EMPTY;

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default status;
