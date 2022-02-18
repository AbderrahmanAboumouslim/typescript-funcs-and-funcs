const carName = <Cars, keyName extends keyof Cars>(
  items: Cars[],
  keyCar: keyName
): Cars[keyName][] => {
  return items.map((item) => item[keyCar]);
};
const data = [
  { name: "javascript", label: "pro" },
  { name: "typescript", label: "type" },
];
console.log(carName(data, "name"));
