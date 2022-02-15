//RUN Code using this file: npx ts-node generics/challenge-1.ts
// create a reduce() that generate map(), filter() and forEach()

// forEach
const generator = <T>(arr: T[], forEach: (x: T) => void): void => {
  arr.reduce((_, curr) => {
    forEach(curr);
    return undefined;
  }, undefined);
};
generator(["javascript", "python", "php"], (x) =>
  console.log(`language: ${x}`)
);
