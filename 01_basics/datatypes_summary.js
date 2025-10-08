//data types----> 2 types
//Primitive 
//7Types-> String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const ScoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail

//Symbol

const id=Symbol('234')
const anotherId=Symbol('234')
//console.log(id===anotherId)

//BigInt

const bigNumber=963247658789553244n
//console.log(bigNumber);


//Reference(Non Primitive)
//Array,Objects,Functions


//Arrays
const heros=["shaktiman","naagraj","doga"]
//console.log(heros);

//Objects
let myObj={
    name:"Hitesh",
    age:22
}
//console.log(myObj);

//Functions
const myFunctions=function(){
    console.log("hello world");
}


//======================================================

//stack(Primitive), Heap(Non- Primitive)

let myName="Ravi kumar"
let anotherName="ravi"
// console.log(myName);
// console.log(anotherName);

let userOne={
    userEmail:"acb@gmail.com",
    upiId:"9507851787@ybl"
}
let userTwo=userOne
userTwo.userEmail="user@gmail.com"

console.log(userOne.userEmail);
console.log(userTwo.userEmail);


