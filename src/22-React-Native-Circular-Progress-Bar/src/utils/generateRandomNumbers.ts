export function generateRandomNumber(maxValue: number): number {
  const randomMultiplier = Math.floor(Math.random() * (maxValue / 1000 + 1));

  const randomNumber = randomMultiplier * 1000;

  return randomNumber;
}
