const dc_heros=["superman","flash","batman"]
const marval_heros=["thor","Ironman","bat"]
const heros=["salu","lalu","kalu"]
//const heros=dc_heros.concat(marval_heros)
//console.log(heros)

// marval_heros.push(dc_heros)
// console.log(marval_heros)


//Sprade(glass example)
// const hero=[...dc_heros,...heros,...marval_heros]
// console.log(hero)

// const another_array=[1,2,3,[4,5,6],7,8,9,[1,2,3,[4,5,6],7,8],0]
// const new_array=another_array.flat(3)   //infinity is hack->(infinity)
// console.log(new_array)

//Data scrapping
// console.log(Array.isArray("Ravi"))
// console.log(Array.from("Ravi is a bod boy"))
// console.log(Array.from({name:"ravi"}))     //intersting


//convert different variable in array -> using of
let score1=100
let score2=200
let score3=300
let score4=400
console.log(Array.of(score1,score2,score3,score4))