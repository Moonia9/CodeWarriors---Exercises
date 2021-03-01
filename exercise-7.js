/*We need a function that can transform a string into a number.*/
let str = "2.3hey"
function stringToNumber(str){
    return parseInt(str);
}
console.log(stringToNumber(str)); //2

//OR
function stringToAnotherNumber(str){
    return parseFloat(str);
}
console.log(stringToAnotherNumber(str)); //2.3

