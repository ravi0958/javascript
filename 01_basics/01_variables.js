const AccountId=457631
let accountEmail="ravikumar@gmail.com"
let accountPassword="12345"
let accountCity="Jaipur"
let accountState
//const AccountId=46548  --> not allowed
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
 accountEmail="ravi@gmail.com"
 accountPassword="54321"
 accountCity="BHOPAL"
console.table([AccountId,accountEmail,accountPassword,accountCity,accountState])