/*Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Example :
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7 */


function basicOperations(operation, value1, value2){
    if (operation === "+"){
        return value1 + value2;
    }
    if (operation === "-"){
        return value1 - value2;
    }
    if (operation === "*"){
        return value1 * value2;
    }
    if (operation === "/"){
        return value1 / value2;
    }
}
console.log(basicOperations("*",56, 78));

//OR using the SWITCH statement
function basicCalculus(operation, value1, value2)
{
    switch(operation){
        case "+" : return value1 + value2;
        case "*" : return value2 * value2;
        case "-" : return value1 - value2;
        case "/" : return value1 / value2;
    }
}
console.log(basicCalculus("/", 4, 7));



