export default function createRandomNumbers(maxNumber, numberCount) {
  const randomNumbers = {};

  while (Object.keys(randomNumbers).length !== numberCount) {
    const randomNumber = Math.floor(Math.random() * maxNumber);

    if (!randomNumbers[randomNumber] && randomNumber !== 0) {
      randomNumbers[randomNumber] = randomNumber;
    }
  }

  return Object.values(randomNumbers);
}
