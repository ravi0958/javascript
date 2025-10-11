//singleton(Constructor)
const jsObj=new Object()  
jsObj.name="Ravi"
jsObj.email="abcd@gmail.com"
// console.log(jsObj.name)
// console.log(jsObj.email)

//non-singleton
const obj={}
// console.log(obj)


//object under object
const tinder={
    email:"xyz@gmail.com",
    EnterName:{
        name:{
            fullname:{
                FirstName:"Ravi",
                LastName:"Kumar"
            }
        }
    }
}
// console.log(tinder.EnterName.name.fullname.FirstName)
// console.log(tinder.EnterName.name.fullname.LastName)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
//const obj3={obj1obj2}
//const obj3=Object.assign({}/*<-- target*/ ,obj1,obj2 /*<--- source*/)
const obj3={...obj1,...obj2}
console.log(obj3);


//array of object
const users=[
    {
        id:1,
        email:"anc@gamil.com",
        login:1234
    },
    {
        id:2,
        email:"xyz@gmail.com",
        login:123
    },
    {
        id:3,
        email:"axc@gmail.com",
        login:456
    }
] 
// console.log(users[0].email)
// console.log(users[1].email)
// console.log(users[2].email)

console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))
console.log(tinder.hasOwnProperty("email"));
