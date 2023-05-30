
// Second-to-Last
// Return the second-to-last element of an array.
const arr1 = [1,2,3,4,5];
const arr2 = [1];

function secondToLast(arr){
    if(arr.length >2){
        return arr.length-1;
    }
    return false;
}

console.log(secondToLast(arr1));
console.log(secondToLast(arr2));