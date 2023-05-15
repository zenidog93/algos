// Given a numerical array, reverse the order of the values. The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed.
function reverseArr(arr){
    for(let i = 0; i<arr.length/2; i++){
        let back = arr[(arr.length-1)-i];
        arr[(arr.length-1)-i] = arr[i];
        arr[i] = back;
    }
    return arr;
}
let arr1= [1,2,3,4,5,6]
console.log(reverseArr(arr1))