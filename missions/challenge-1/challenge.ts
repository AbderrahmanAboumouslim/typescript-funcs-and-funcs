// interface House {

// }

// interface HouseWithID {

// }

// function findHouses(houses: string): HouseWithID[];
// function findHouses(
//   houses: string,
//   filter: (house: House) => boolean
// ): HouseWithID[];
// function findHouses(houses: House[]): HouseWithID[];
// function findHouses(
//   houses: House[],
//   filter: (house: House) => boolean
// ): HouseWithID[];

// console.log(
//   findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
// );

// console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));

// Solution //
import houses from "./houses";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];

function findHouses(
  paramOne: string | House[],
  paramTwo?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] =
    typeof paramOne === "string" ? JSON.parse(paramOne) : paramOne;

  const getData = (paramTwo ? houses.filter(paramTwo) : houses).map((house) => {
    return {
      id: houses.indexOf(house),
      ...house,
    };
  });

  return getData;
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
console.log(findHouses(houses));
