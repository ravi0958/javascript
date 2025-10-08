let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

let myCreatedDate1=new Date(23,0,4)
//console.log(myCreatedDate1.toString())

let myCreatedDate2=new Date(23,0,4,5,35)
//console.log(myCreatedDate2.toLocaleString())


let myCreatedDate3=new Date("2022-02-15")
//console.log(myCreatedDate3)

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate3.getTime())

//convert millisecond to seconds
// console.log(Math.floor(myTimeStamp/1000))

let newDate=new Date()
// console.log(newDate)
// console.log(newDate.getDay()+1)
// console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekday:"short"
})
console.log(newDate)