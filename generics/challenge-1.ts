//RUN Code using this file: npx ts-node generics/challenge-1.ts
// create a reduce() that generate map(), filter() and forEach()

// forEach
const generatorForEach = <T>(arr: T[], forEachFunc: (x: T) => void): void => {
  arr.reduce((_, curr) => {
    forEachFunc(curr);
    return undefined;
  }, undefined);
};
generatorForEach(["javascript", "python", "php"], (x) =>
  console.log(`language: ${x}`)
);

// filter
const generatorFilter = <T>(items: T[], filterFunc: (x: T) => boolean): T[] =>
  items.reduce((a: T[], b) => (filterFunc(b) ? [...a, b] : a), []);

console.log(generatorFilter([1, 44, 2, 33, 10, 5, 100], (x) => x >= 10));
