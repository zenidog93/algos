// Given a sorted array and a value, return whether that value is present in the array. Do not sequentially iterate the entire array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted.

let arr1 = [1,2,3,4,5,6];

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
        
    return false;
}

console.log(binarySearch(arr1, 10));