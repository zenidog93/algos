// Given an array, index, and additional value, ​insert the value into the array a​ t the given index. Do this without using built-in array methods. You can think of ​PushFront(arr,val)​ as equivalent to InsertAt(arr,0,val)​.

function insertAt(arr, index, value){
    let newArr = [];
    for(let i = 0; i<index; i++){
        newArr.push(arr[i]);
    }
    newArr.push(value);
    for(let j = index; j<arr.length; j++){
        newArr.push(arr[j]);
    }
    return newArr;
}
let arr = [1,2,3,4,5,6]
console.log(insertAt(arr, 4, 99));