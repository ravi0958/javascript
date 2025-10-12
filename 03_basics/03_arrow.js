const user={
    username:"Hitesh",
    price:999,
    welcomeMessage:function() {
        console.log(`${this.username} ,Welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this);       
// function-> Arrow

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

// const chai=function (){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

// const chai=() =>{
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

// const addSum =function(num1,num2){
//     return num1+num2
// }
// console.log(addSum(3,5))

//Change in arrow function 

// const addSum =(num1,num2)=>{     //explicit return
//     return num1+num2
// }

// const addSum =(num1,num2)=>  num1+num2
//const addSum =(num1,num2)=> ( num1+num2) //Impicit return


//return object using arrow
// const addSum =(num1,num2)=>( {username:"Hello"})
console.log(addSum(3,5))