export default function createRandomNumbers(
  maxNumber,
  numberCount,
  numberToExclude,
) {
  const randomNumbers = {};

  while (Object.keys(randomNumbers).length !== numberCount) {
    const randomNumber = Math.floor(Math.random() * maxNumber);

    if (
      !randomNumbers[randomNumber] &&
      randomNumber !== 0 &&
      numberToExclude !== randomNumber
    ) {
      randomNumbers[randomNumber] = randomNumber;
    }
  }

  return Object.values(randomNumbers);
}
