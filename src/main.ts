//define string
let myName: string = "kareem";
//now try to type myName then dot
//ts will help you and
//try now to reassign number to myName
//u will find error

//also u can declare var and assign value letter
//let myName: string
//myName = "kareem nour"

//define number

//now let talk about inference, implicit and explicit
let myAge = 30;

//hover now in age u will c ts decide the type of this var is number, if u tried now to reassign string it will give an error, this operation the operation of auto detect type is called implicit or inference
//the opposite of this operation called explicit and this is define the type by ur self

//boolean
//regex
//null
//undefined
//any: we can use this if we dont have info what type of incoming value but dont use it as we called it the killer of ts
let anyVar: any = "ahmed";
//now try to type anyVar and then dot there is no suggestion as we did in string
//union type

//literal type
let userName: "ahmed" | "kareem";
userName = "ahmed";
