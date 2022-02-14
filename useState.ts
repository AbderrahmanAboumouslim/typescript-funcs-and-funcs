// this example is inspired from react hook {useState}

const useState = (state: string): [() => string, (x: string) => void] => {
  let input: string = state;
  return [() => input, (x: string) => (input = x)];
};

const [state, setState] = useState("javascript");
console.log(state()); //Output: javascript

setState("HTML");
console.log(state()); //Output: HTML
