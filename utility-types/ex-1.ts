interface Dev {
  name: string;
  age: number;
  email: string;
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
    { name: "Abderrahamn", age: 25, email: "abcd@ok.com" },
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
