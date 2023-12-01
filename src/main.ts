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

//what if we want to design array with specific length and types
//the answer is tuple
let userData: [string, number];
userData = ["kareem", 30];

//also we can redecalier
userData[0] = "ahmed";
