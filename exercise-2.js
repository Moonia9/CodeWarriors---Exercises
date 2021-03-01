/*Write a function called repeat_str which repeats the given string src exactly count times.

Output : repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

//Trying .repeat()
let string = "Hello";
console.log(`"My greeting for you": ${string.repeat(5)}`);

//Exercise -- using FOR loop
function repeatStr(counter, string){
    let myString = "";
    for (let i=0; i<counter; i++){
        myString = myString + string;
    }
    return myString;
}
console.log(repeatStr(8,"hey"));

//Exercise -- using WHILE loop
function repeatString(counter, string){
    let i=0;
    let myString = "";
    while(i<counter){
        myString = myString + string;
        i++;
    }
    return myString;
}
console.log(repeatString(15,"hello"))
