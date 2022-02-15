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

///////////////////////////////////////////////////////////
interface Player<P> {
  player: P;
  level: number;
}

const getLevel = <T>(players: T[], level: (x: T) => number): T[] => {
  const playerItem: Player<T>[] = players.map((player) => ({
    player,
    level: level(player),
  }));

  playerItem.sort((a, b) => a.level - b.level);

  return playerItem.map((item) => item.player);
};

const team = [
  { name: "Abderrahman", level: 27 },
  { name: "Boss", level: 1000 },
  { name: "noob", level: 3 },
];

console.log(getLevel(team, ({ level }) => level));
