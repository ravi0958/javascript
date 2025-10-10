//singleton(Constructor)
//object.create


//Object literals(Declare)


const mysym=Symbol("key1")
const myObj={
    name :"ravi kumar",
    "full name":"ravi teja",
    [mysym]:"my keys",  //Symbol denote
    age:25,
    location:"Bihar",
    email:"ravikumar@gmail.com",
    isLoggedIn:false,
    lastLoginDays:"Wednesday"
}
// console.log(myObj)
// console.log(myObj.age)
// console.log(myObj.name)
// console.log(myObj["full name"])


myObj.email="xyz@gmail.com"
//object freeze is used to cut this code in the line then after the code not be working
//Object.freeze(myObj)

//Object change
myObj.email="abc@gmail.com"
// console.log(myObj.email)
// console.log(myObj[mysym])

//function as like as variable
myObj.greeting = function(){
    console.log("Hello JS");
}
console.log(myObj.greeting());

myObj.greetingTwo=function(){
    console.log(`Welcome to my first object code`)
    console.log(`Hello Js Welcome " ${this["full name"]}"`)
}
console.log(myObj.greetingTwo())