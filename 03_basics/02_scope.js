let a=100
if(true){
let a=10
const b=20
c=30         //(var ko likho ya nahi likho behaviour are same)
//console.log("Inner" ,a)
}
//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const userName="Ravi"
    function two(){
        const website="Youtube"
        console.log(userName);
    }
    //console.log(website);
    two()
}
//console.log(userName)
//one()

if(true){
    const username="Hitesh"
    if(username ==="Hitesh"){
        const website="Youtube"
        console.log(username + website)
    }
}

//  ++++++++++++++++  interesting  ++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1
}


//function hold in expression variable
console.log(addtwo(15))   //hosting me yase nahi likh sakte hai
const  addtwo=function(num){
    return num+2
}