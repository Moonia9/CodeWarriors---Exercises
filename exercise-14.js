//Using a for loop print all even numbers up to and including n. Don’t include 0.
let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
//While Loop
let j = 1;
while(j <= 22) {
  if(j % 2 === 0) {
    console.log(j);
  }
  j++;
}

//For loop
for (let i = 1; i <= 22; i++) {
  if (i % 2 === 0) {
    console.log(i);  
  }
}