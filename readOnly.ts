interface hacker {
  name: string;
  id: string | number;
}

const getHacker = (name: string, id: number): Readonly<hacker> => {
  return {
    name,
    id
  };
};

const dev1 = getHacker("noob", 10101000101);

// dev1.name = 'pro' // won't work in the Readonly ;

//

//readonly in Tuples
const nums = (
  x: number,
  y: number,
  z: number
): readonly [number, number, number] => {
  return [x, y, z];
};

const num1 = nums(1, 3, 9);
// num1[0] = 5; won't work in the readonly

//

const fixedArray = [10, 20, 500] as const;
// fixedArray[0] = 2; won't work cuz each item in
// the array is a const by itself and it is a readonly.
