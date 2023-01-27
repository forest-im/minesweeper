export const MODES = {
  easy: {
    ROW: 5,
    COL: 6,
    MINES_COUNT: 10,
  },
  medium: {
    ROW: 16,
    COL: 16,
    MINES_COUNT: 40,
  },
  hard: {
    ROW: 30,
    COL: 16,
    MINES_COUNT: 50,
  },
  extream: {
    ROW: 30,
    COL: 24,
    MINES_COUNT: 180,
  },
};

export const FLAG = {
  MINE: -1,
  AROUND_ALL_EMPTY: 9,
  EMPTY: 10,
  OPENED: 11,
  QUESTION_MARK: 12,
  MINE_FLAG: 13,
};

export const FLAG_CONTENT = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: "",
  10: "",
  11: "",
  12: "❔",
  13: "🏳️‍🌈",
  [-1]: "",
  mine: "💣",
};

export const GAME_STATUS = {
  PROCEEDING: "Proceeding",
  FAIL: "Fail",
  SUCCESS: "Success",
  START: "Start",
};

export const MOUSE = {
  RIGHT_MOUSE: 2,
  LEFT_MOUSE: 0,
};
