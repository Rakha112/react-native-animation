export function calculatePercentage(
  randomValue: number,
  maxValue: number,
): number {
  // Menghitung persentase
  const percentage = Math.round((randomValue / maxValue) * 100);

  return percentage;
}
