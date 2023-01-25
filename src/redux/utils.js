import { FLAG } from "../lib/constants";
import createRandomNumbers from "../lib/utils/createRandomNumbers";

export function createNew2DArray(row, col) {
  return Array(row)
    .fill(FLAG.EMPTY)
    .map(() => Array(col).fill(FLAG.EMPTY));
}

export function changeSequenceTo2DArrIndex(sequenceNumber, colLength) {
  const row = Math.floor((sequenceNumber - 1) / colLength);
  const col = (sequenceNumber - 1) % colLength;

  return [row, col];
}

export function mappingMinesToTable(
  row,
  col,
  minesCount,
  table,
  minesIndexObj,
) {
  const minesArr = createRandomNumbers(
    row * col,
    minesCount,
    row * col + col + 1,
  );
  const copyMinesIndexObj = minesIndexObj;

  const newTable = minesArr.reduce((table2D, mine) => {
    const copyTable = [...table2D];
    const [rowIndex, colIndex] = changeSequenceTo2DArrIndex(mine, col);
    copyMinesIndexObj[`${rowIndex}-${colIndex}`] = FLAG.MINE;
    copyTable[rowIndex][colIndex] = FLAG.MINE;

    return copyTable;
  }, table);

  return newTable;
}

export function createTableDataObj(table, row, col) {
  return {
    flag: table[row][col],
    row,
    col,
  };
}

export function checkAround(table, row, col, mark) {
  if (table[row][col] !== FLAG.EMPTY || mark[`${row}-${col}`]) return;

  const copyMark = mark;
  const copyTable = table;

  copyMark[`${row}-${col}`] = "visited";
  copyTable[row][col] = FLAG.OPENED;

  const aroundCellData = [];
  const aroundEmptyCellArray = [];
  let outsideCellCount = 6;

  if (table[row - 1]) {
    aroundCellData.push(
      createTableDataObj(table, row - 1, col - 1),
      createTableDataObj(table, row - 1, col),
      createTableDataObj(table, row - 1, col + 1),
    );

    outsideCellCount -= 3;
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
    outsideCellCount -= 3;
  }

  while (aroundCellData.length) {
    const cellData = aroundCellData.pop();

    if (!cellData.flag) {
      outsideCellCount += 1;
    } else if (
      cellData.flag !== FLAG.MINE &&
      cellData.flag !== FLAG.MINE_FLAG
    ) {
      aroundEmptyCellArray.push(cellData);
    }
  }

  if (aroundEmptyCellArray.length === FLAG.AROUND_ALL_EMPTY) {
    aroundEmptyCellArray.forEach(cell => {
      return checkAround(table, cell.row, cell.col, mark);
    });
  } else {
    copyTable[row][col] =
      FLAG.AROUND_ALL_EMPTY - aroundEmptyCellArray.length - outsideCellCount ||
      FLAG.AROUND_ALL_EMPTY;
  }
}
