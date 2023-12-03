"use strict";
//let create basic function
//if we left params without annotations let us c the inferance value
const sum = (num1, num2) => num1 + num2;
sum(1, 2);
//void
//string
//union
//with any
//as u c it will give u an error to fix that u have to uncomment  "noImplicitAny": false
//create function like below
const contactAny = (num1, num2) => num1 + num2;
contactAny("ahmed", "alaa"); //now if u tried to add dot after contactAny(). see no suggestions however if params were strings u will see alot of suggestions
const calc = (num1, num2) => num1 + num2;
//optional param
//like we did with object we can optional param
//but as u c we got an error, in object we fixed it with optional chain
//how we can fix it here? by type guard
const sumAll = (num1, num2, num3) => {
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
const restParam = (a, ...numbers) => {
    console.log(numbers);
};
restParam(1, 2, 3, 3, 4, 5);
//more about guards
//function with object params
//define function inside type aliases
