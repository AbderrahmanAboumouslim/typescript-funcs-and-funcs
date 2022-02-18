interface Frontend {
  name: string;
  language: string;
}

interface Fullstack {
  stack: Frontend & { experience: number; verified: boolean };
  simpleInfo: Frontend;
}

const showStack = <Info extends keyof Fullstack>(
  stack: Info,
  show: Fullstack[Info]
): void => {
  console.log([stack, show]);
};

showStack("stack", {
  experience: 3,
  language: "javascript",
  name: "Abderrahman",
  verified: false,
});
