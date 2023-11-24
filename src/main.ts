//let start to show what is power of TS
//open code sandbox and create two var let num1 = "10"  num2 = 2
//try to / or multiply
//as u c it works but try this now in ts play ground
let num1 = "10";
let num2 = 10;
// num1 / num2

//start presentation

//create file html, main.ts and main.js
//let us define myName and run tsc command
//as u c  this command generate js file, but as u c js is old code var we will learn how to control the version of js after little bit
//the error u c now because we open both file ts vs js,  close it and error will gone

let myName = "hello";
console.log(myName);

//now let us try to organize our project little bit
//create build folder move main.ts into it and src folder, then tsc --init
//as u c tsconfig.ts has been created, we used this file to set some config for ts, such as js version
//open ts config change "rootDir": "./src" and  "outDir": "./build/js" and
//run tsc and check js file now, as u see there is no var now thats because
//--> target setting u can find it in tsconfig, we use target to configure version of js output file

//another command i want to share with u instead of tsc command try tsc --watch
//now we it will re build js once u do update in ts file

//another issue we have try to create ts file out of src folder, as u c it create new js file outside build
//to fix it go to ts config add to end "include": ["src"]

//uncomment noEmitOnError so u can not run until fix error
