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
function getDataC(paramOne: unknown, paramTwo?: unknown): MyObject {
  let data: MyObject = {
    x: 0,
    y: 0,
  };

  if (typeof paramOne === "object") {
    data = { ...(paramOne as MyObject) };
  } else {
    data = {
      x: paramOne as number,
      y: paramTwo as number,
    };
  }

  return data;
}
console.log(getDataC({ x: 4, y: 5 }));
