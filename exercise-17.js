/*Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.*/
let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 

function everySecondLetterInStringToUppercase(str){
    let words = str.split("");
    let uppers = words.map(function(value, i){
        if (i % 2 === 0){
        return (value + "").toLowerCase();
      } else {
          let value = "Z"
        return (value + "" ).toUpperCase();
      }
    });
    return uppers.join('');
}
console.log(everySecondLetterInStringToUppercase(str1));



/* About Syntax
.split() --> this method is used to split a string into an array of substrings, and returns the new array.
string.split()
In the case above str.split(""); --> the string is returned as j,a,v,a,s,c,r,i,p,t
----------------------------------------------------------------------------------------------------
.map() --> this method creates a new array populated with the results of calling a provided function on every
 element in the calling array.
 ----------------------------------------------------------------------------------------------------
 .join() --> ethod creates and returns a new string by concatenating all of the elements in an array 
 In the case above .join(''); --> the letters are returned together
*/ 
