import { SELECT_MODE, CLICK_CELL } from "./actionTypes";

export const selectMode = mode => ({ type: SELECT_MODE, payload: { mode } });

export const clickCell = clickedCellIndex => ({
  type: CLICK_CELL,
  payload: { clickedCellIndex },
});
