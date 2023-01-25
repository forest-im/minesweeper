export const MODES = {
  easy: {
    ROW: 5,
    COL: 6,
    MINES_COUNT: 3,
  },
  medium: {
    ROW: 16,
    COL: 16,
    MINES_COUNT: 40,
  },
  hard: {
    ROW: 30,
    COL: 16,
    MINES_COUNT: 99,
  },
  extream: {
    ROW: 30,
    COL: 24,
    MINES_COUNT: 180,
  },
  custom: {
    ROW: 18,
    COL: 9,
    MINES_COUNT: 24,
  },
};

export const FLAG = {
  MINE: -1,
  MINE_FLAG: 13,
  QUESTION_MARK: 12,
  EMPTY: 10,
  OPENED: 9,
  AROUND_ALL_EMPTY: 8,
};

export const GAME_STATUS = {
  PROCEEDING: "Proceeding",
  FAIL: "Fail",
  SUCCESS: "success",
};

export const MOUSE = {
  RIGHT_MOUSE: 2,
  LEFT_MOUSE: 0,
};
