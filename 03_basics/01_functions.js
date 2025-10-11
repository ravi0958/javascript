function myName(){
    console.log("R")
    console.log("a")
    console.log("v")
    console.log("i")
}
//myName()

//
//const result=sumTwoNumber(3,5)
//console.log(result)

function sumTwoNumber(num1,num2){
    // let result=num1+num2
    // return result

    return num1+num2
}
const result=sumTwoNumber(3,5)
//console.log("Result:",result)

//function loginUserMessage(username="sam"){
function loginUserMessage(username){

   // if(username===undefined){    //
   if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())


//Cart

function calculateCartPrice(val1,val2 ,...num ){  /*rest operator using -> return array*/    
    /*val1 and val2 is store 200 and 300*/
    return num
}
console.log(calculateCartPrice(200,300,400,500))

//object passing in function
const user={
    username:"Ravi kumar",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
    console.log(anyObject.username)
}
handleObject({
    username:"Gopal",
    price:200
})

//Array passing in function 

const myNewArray=[100, 200, 300, 400]
function returnSecondArray(getArray){
    return getArray[1]
}
//console.log(returnSecondArray(myNewArray))
console.log(returnSecondArray([100,200,300,400,500]))
