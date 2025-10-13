//if statement

if(true){

}

//<, >, <=, >=, ==(check equal), !=(not equal), ===(type checking), !==(anti pattern)

// const temperature=40
// if(temperature<50){
//     console.log("less than 50");
// }else{
//     console.log("teperature is greater than 50");
// }

// const score=200
// if(score>100){
//     const power="fly"  //use=var(var is use the global variable)
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`);

// const balance=1000
// // if(balance>500)  console.log("test"),console.log("test2");   //not are used in good coder
// if(balance<500){
//     console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }

const isLoggedIn=true
const debit=true
const loggedInFromGoogle=false
const loggedInFromGmail=true

if(isLoggedIn && debit && 8==0){    //multiple condition are check in one time
    console.log("Allow to buy.")
}

if(loggedInFromGmail || loggedInFromGoogle){
    console.log("User Logged in")
}

