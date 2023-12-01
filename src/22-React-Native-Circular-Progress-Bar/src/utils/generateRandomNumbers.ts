export function generateRandomNumber(maxValue: number): number {
  // Menghasilkan angka acak antara 0 dan (maxValue / 1000)
  const randomMultiplier = Math.floor(Math.random() * (maxValue / 1000 + 1));

  // Menghasilkan angka acak dengan kelipatan seribu
  const randomNumber = randomMultiplier * 1000;

  return randomNumber;
}
