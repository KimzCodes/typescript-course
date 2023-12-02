//array
//string
let names: string[] = [];
//try to push numbers
//names.push(1)
//will give u error

//try names[0]. u will c it suggested all string method

//same thing as number

let usersAges: number[] = [];
//if try to push string will give error

//could be union
let users: string | number[] = [];
//users[0]. it will show less suggestions as u c

//u can make it also as any

//what if we want to design array with specific length and types
//the answer is tuple
let userData: [string, number];
userData = ["kareem", 30];

//also we can redeclare
userData[0] = "ahmed";

//----------------------------------------------------------------
//objects
//we can define object like that
// let humanBuild: Object = {
//   name: "Kareem",
//   age: 30,
//   sleep: true,
// };

//but this is generic why? back to basic function, arrays and objects are objects
// console.log(typeof []);
//so we can do the following because all are same type
//humanBuild = [];

//so what is the best approach to create type for object
//let make TS help us
//move mouse over creator u will find ts help you and make inference for u
const creature = {
  name: "Kareem",
  age: 30,
  sleep: true,
};
// creature.name = "amr";
//now let us try reassign but with wrong value

// creature.name = 123;

//so the correct way
// const human: {
//   name: string;
//   age: number;
//   sleep: boolean;
// } = {
//   name: "Kareem",
//   age: 30,
//   sleep: true,
// };

//but imagine what if i have many objects have same build? how i can annotate the type?
//introduce type

type TCreature = {
  name: string;
  age: number;
  sleep: boolean;
  speed?: string;
};

//now create an object give it type TCreature
//as u c once u give it type and empty object will give u an error because name, age and sleep are required
//const human: TCreature = {};

const human: TCreature = {
  name: "kareem",
  age: 35,
  sleep: true,
  speed: "to fast",
};
//u can also add array and union types

//and also we can reuse TCreature, create

//show optional properties
// nullish reason because
human.speed?.toLowerCase();

//nested objects

//introduce enum

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
