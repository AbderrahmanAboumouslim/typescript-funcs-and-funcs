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

type Override = Partial<Dev>;

// override
const generateDev = (dev: Dev, override: Override): Dev => {
  return { ...dev, ...override };
};

console.log(
  generateDev(
    { name: "Abderrahamn", age: 25, email: "abcd@ok.com" },
    { email: "myEmail@youEmail.com" }
  )
);
