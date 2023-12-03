//let create basic function
//if we left params without annotations let us c the inferance value
const sum = (num1: number, num2: number): number => num1 + num2;
sum(1, 2);

//void
//string
//union

//with any
//as u c it will give u an error to fix that u have to uncomment  "noImplicitAny": false

//create function like below
const contactAny = (num1: any, num2: any) => num1 + num2;
contactAny("ahmed", "alaa"); //now if u tried to add dot after contactAny(). see no suggestions however if params were strings u will see alot of suggestions

//function type aliases
//imagine we have multi function will have same params types and return
//so instead every time do annotation manually we can create type
type TSum = (a: number, b: number) => number;

const calc: TSum = (num1, num2) => num1 + num2;

//optional param
//like we did with object we can optional param
//but as u c we got an error, in object we fixed it with optional chain
//how we can fix it here? by type guard
const sumAll = (num1: number, num2: number, num3?: number): number => {
  if (typeof num3 === "number") {
    return num1 + num2 + num3;
  }
  return num1 + num2;
};

//default param

// const defaultParam = (num1: number, num2: number = 3) => {
//   return num1 + num2;
// };

// console.log(defaultParam(1));
//but what if the first one became default
//console.log(defaultParam(undefined, 1));

//reset params
const restParam = (a: number, ...numbers: number[]) => {
  console.log(numbers);
};

restParam(1, 2, 3, 3, 4, 5);

//more about guards

//function with object params

//define function inside type aliases
