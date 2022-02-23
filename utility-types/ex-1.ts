interface Dev {
  name: string;
  age?: number;
  email?: string;
  id: string;
}

// interface Override {
//   name?: string;
//   age?: number;
//   email?: string;
// }

// optional
type Override = Partial<Dev>;

// required
type requiredDev = Required<Dev>;

// override
const generateDev = (dev: Dev, override: Override): Dev => {
  return { ...dev, ...override };
};

// Pick
type pickNameAge = Pick<Dev, "name" | "age">;

console.log(
  generateDev(
    {
      name: "Abderrahamn",
      age: 25,
      email: "abcd@ok.com",
      id: "randomixidisid"
    },
    { email: "myEmail@youEmail.com" }
  )
);

// Record
interface player {
  name: string;
  level: number;
}

type country = "morocco" | "italy" | "japan" | "canada";

const players: Record<country, player> = {
  canada: { name: "loli", level: 34 },
  italy: { name: "nona", level: 44 },
  morocco: { name: "rokinos", level: 24 },
  japan: { name: "tchu", level: 99 }
};

console.log(players.morocco);

// another Record example
const keyValue = (arr: Dev[]): Record<string, Dev> => {
  return arr.reduce((a, b) => {
    return { ...a, [b.id]: b };
  }, {});
};

console.log(
  keyValue([
    { name: "Rokinos", id: "okidoki" },
    { name: "Tom", id: "nanoni" }
  ])
);
