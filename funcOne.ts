export const func = (
  arryaOfnumbers: number[],
  y: (a: number) => number
): number[] => arryaOfnumbers.map(y);
console.log(func([11, 33, 44], (d) => d * 3));
