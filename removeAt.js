// Given an array and an index into the array, remove and return the array value ​at that index. Do this without using any built-in array methods except ​pop()​. Think of ​PopFront(arr)​ as equivalent to ​RemoveAt(arr,0).​

function removeAt(arr, index){
    let newArr = [];
    for(let i = 0; i<index; i++){
        newArr.push(arr[i])
    }
    let target = arr[index];
    for(let j = index; j < arr.length; j++){
        newArr[j - 1] = arr[j];
    }
    console.log(newArr);
    return target

}

let arr = [1,2,3,4];
console.log(removeAt(arr, 2));