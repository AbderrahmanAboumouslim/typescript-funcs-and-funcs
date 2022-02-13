type Callback = (a: number) => number;

export const func = (arryaOfnumbers: number[], callback: Callback): number[] =>
  arryaOfnumbers.map(callback);

console.log(func([11, 33, 44], (d) => d * 3));

const littleCallback: Callback = (a) => a / 2;
console.log(littleCallback(1));

// func return func ( closures)
export const funcy =
  (a: number): Callback =>
  (b: number) =>
    a + b;
const finder = funcy(10);
console.log(finder(20));

////////////////////////////////
///// function OVERLOADING ////
//////////////////////////////
interface MyObject {
  x: number;
  y: number;
}

// function getDataA(obj: MyObject): MyObject;
// function getDataB(a: number, b: number): MyObject;
// function getDataD(a: string): MyObject;
function getDataC(paramOne: unknown, paramTwo?: unknown): MyObject {
  let data: MyObject = {
    x: 0,
    y: 0,
  };

  if (typeof paramOne === "object") {
    data = { ...(paramOne as MyObject) };
  } else if (typeof paramOne === "string") {
    (paramOne as string).split(", ").forEach((item) => {
      const [key, value] = item.split(":");
      data[key as "x" | "y"] = Number(value);
    });
  } else {
    data = {
      x: paramOne as number,
      y: paramTwo as number,
    };
  }

  return data;
}
console.log(getDataC(9, 30)); //Output: { x: 9, y: 30}
console.log(getDataC({ x: 2, y: 4 })); //Output: { x: 2, y: 4}
console.log(getDataC("x:1, y:2"));
