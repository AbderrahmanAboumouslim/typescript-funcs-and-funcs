enum hackWay {
  preHack = "preHack",
  hacking = "hacking",
  hacked = "hacked"
}

const objHack = {
  [hackWay.hacked]: "+hacked"
};

//

const giveExtraOne = (guess: 4 | 5 | 6): number => {
  return guess + 1;
};

//

function shopping(name: "cake", data: { item_id: number }): void;
function shopping(name: "wheat", data: { item_id: number }): void;

function shopping(name: string, data: unknown): void {
  console.log(`${name} : ${JSON.stringify(data)}`);
}

shopping("cake", { item_id: 543946 });
