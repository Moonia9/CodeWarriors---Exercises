/*Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.*/
 
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]

function sumOfEachPairInArray(arr1, arr2){
    let sum = 0;
    let newSumArray = [];
    for(let i=0; i< arr1.length; i++){
        sum = arr1[i] + arr2[i];
        newSumArray.push(sum);
    }
    return newSumArray;
}

console.log(sumOfEachPairInArray(arr_3, arr_4));

