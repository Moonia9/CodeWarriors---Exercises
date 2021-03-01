// Get the sum of two arrays…actually the sum of all their elements.
/* let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
   let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627 */

let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

// Trying out the .reduce()
let sum1 = arr1.reduce(function(a,b){
    return a+b;
}, 0);
console.log(sum1);

let sum2 = arr2.reduce(function(a,b){
    return a+b;
},0);
console.log(sum2);

let sum = sum1 + sum2;
console.log(sum);

// Writing it with the FOR loop
// arr1
function theSumOfTheFirstArrayNumbers(arr1){
    let total = 0;
    for(let i in arr1){
        total = total + arr1[i];
    }
    return total;
}
console.log(theSumOfTheFirstArrayNumbers(arr1));

// arr2
function theSumOfTheSecondArrayNumbers(arr2){
    let total = 0;
    for(let i in arr2){
        total += arr2[i];
    }
    return total;
}
console.log(theSumOfTheSecondArrayNumbers(arr2));

// arr1 + arr2
function sumOfTheTwoArrays(arr1, arr2){
    let total1 = 0;
    for(let i in arr1){
        total1 = total1 + arr1[i];
    }
    let total2 = 0;
    for(let i in arr2){
        total2 = total2 + arr2[i];
    }
    return total1 + total2;
}
console.log(sumOfTheTwoArrays(arr1, arr2));