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
