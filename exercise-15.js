//Using a for loop, output the elements in reverse order
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

function arrayInReverseOrder(arr){
    let newArray = [];
    for(let i=arr.length-1; i>=0; i--){
        newArray.push(arr[i]);
    }
    return newArray;

}
console.log(arrayInReverseOrder(arr));

//Using a loop, try reversing the array In-place
let array2 = [5,8,2,9,5,6,3,1];

function reverseArrayInPlace(arr){
    for(let i=0; i<=Math.floor((arr.length -1) /2); i++){
        let element = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        element = arr[arr.length - 1 - i];
    }
    return arr;
}
console.log(reverseArrayInPlace(array2));
