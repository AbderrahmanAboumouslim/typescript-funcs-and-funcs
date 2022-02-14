interface Signup {
  id: number;
  name: string;
  question?: {
    pwd?: string;
  };
}

const signMeUp = (user: Signup): string => user?.question?.pwd ?? "";

//optional with cb functions
const finder = (a: string, b: string, cb?: () => void): void => {
  console.log(a, b);
  cb?.();
};
