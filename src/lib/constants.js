export const MODES = {
  EASY: {
    X: 5,
    Y: 6,
    MINES: 10,
  },
  MEDIUM: {
    X: 16,
    Y: 16,
    MINES: 40,
  },
  HARD: {
    X: 30,
    Y: 16,
    MINES: 99,
  },
  EXTREAM: {
    X: 30,
    Y: 24,
    MINES: 180,
  },
  CUSTOM: {
    X: 18,
    Y: 9,
    MINES: 24,
  },
};

export const FLAG = {
  MINE: -1,
  MINE_FLAG: 11,
  EMPTY: 10,
  OPENED: 9,
  AROUND_ALL_EMPTY: 8,
};

export const GAME_STATUS = {
  PROCEEDING: "Proceeding",
  FAIL: "Fail",
};
