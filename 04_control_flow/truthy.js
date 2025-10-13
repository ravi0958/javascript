const email=[]

if (email) {
    console.log("We got email")
}else{
    console.log("Don't have user email")
}

//falsy values

//false, 0, -0, BigInt On,null, undefined, NaN

//truthy values   -(String k under ulta hota hai)
//"0", "false", " ", [], {}, function(){}

// if(email.length===0){                    //check array length
//     console.log("Array is empty");
// }

// const emptyobj={}

// if(Object.keys(emptyobj).length===0){      //check object length
//     console.log("Object is empty");   
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1=5 ?? 10           //--->5
// val1= null ?? 10       //--->10
// val1=undefined ?? 10   //--->10
// val1=null ?? 10 ?? 20     // first value is assign
console.log(val1)


//Ternary Operator

//condition ? true: false

const bal=100
bal<=80 ? console.log("Less than 80") : console.log("more than 80")