// Implement a function ​removeNegatives()​ that accepts an array and removes any values that are less than zero.
// Second-level challenge: ​don’t use nested loops.

function removeNegatives(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeNegatives([1,-2,3,-4,-5]))