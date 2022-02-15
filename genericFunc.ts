// from normal TS function
const normalFunc = (state: string): [() => string, (x: string) => void] => {
  let input: string = state;
  return [() => input, (x: string) => (input = x)];
};

// to generic function
const genericFunc = <T>(state: T): [() => T, (x: T) => void] => {
  let input: T = state;
  return [() => input, (x: T) => (input = x)];
};

const [generic, setGeneric] = genericFunc([1, "allo", 55, 23]);
console.log(generic());

// overriding the generic T
const [override, setOverride] = genericFunc<number | undefined>(undefined);
console.log(override()); //Output: undefined
setOverride(30);
console.log(override()); //Output: 30
