/*Write a function called repeat_str which repeats the given string src exactly count times.

Output : repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHello*/

function repeatString(counter, string){
    let myString = "";
    for(i=0; i<counter; i++){
        myString = myString + string;
    }
    return myString;
}
console.log(repeatString(8,"heya"));