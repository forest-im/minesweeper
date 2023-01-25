import {
  START_GAME,
  CLICK_CELL,
  STICK_MINE_FLAG,
  STICK_QUESTION_MARK,
  RESET_CELL,
} from "./actionTypes";

export const startGame = mode => ({ type: START_GAME, payload: { mode } });

export const clickCell = clickedCellIndex => ({
  type: CLICK_CELL,
  payload: { clickedCellIndex },
});

export const stickMineFlag = clickedCellIndex => {
  return {
    type: STICK_MINE_FLAG,
    payload: { clickedCellIndex },
  };
};

export const stickQuestionMark = clickedCellIndex => ({
  type: STICK_QUESTION_MARK,
  payload: { clickedCellIndex },
});

export const resetCell = clickedCellIndex => ({
  type: RESET_CELL,
  payload: { clickedCellIndex },
});
