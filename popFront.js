// Given an array, ​remove and return the value ​at the beginning of the array. Do this without using any built-in array methods except ​pop()​.

function popFront(arr){
    let first=arr[0];
    // console.log(tempVar);
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
        //we move shift all the values to the left
    }
    arr.pop();
    //remove the duplicate at the end 
    return first;
}
let arr = [1,2,3,4]
console.log(popFront(arr));
console.log(arr);