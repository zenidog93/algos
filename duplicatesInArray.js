// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let array1 = [1,2,3,4,1];
let array2 = [];

let hasDups = array1.length !== new Set(array1).size;

if (hasDups){
    console.log("has duplicates")
} else {
    console.log("does not have duplicates")
}
function containsDups(nums){
    let hasDups = nums.length !== new Set(nums).size;
    if (hasDups){
        return true;
    } else {
        return false;
    }
}

function containsDups2(nums){
    // console.log(nums);
    tempArr = [];
    for(let i = 0; i< nums.length-1; i++){
        // console.log(nums[i]);
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                tempArr.push(nums[j])
            } 
        }
    }
    if(tempArr.length>0){
        return true;
    } else {return false}
}


console.log(containsDups2(array1));
console.log(containsDups(array1));