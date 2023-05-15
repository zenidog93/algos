// Given an array and an additional value, ​insert this value ​at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, target){
    let newArr = [target];
    for(let i = 0; i<arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(pushFront([1,2,3], 9))