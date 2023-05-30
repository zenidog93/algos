// Implement ​rotateArr(arr, shiftBy)​ that accepts array and offset. Shift arr’s values ​to the right​ by that amount. ‘
// Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1)​, change the array to [​ 3,1,2]​.

let arr1 = [1,2,3]
function rorateArray(arr, shiftBy){
    for(let i = 0; i<shiftBy; i++){
        for(j = 0; j<arr.length; j++){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[arr.length-1] = temp;
            console.log(arr)
        }
        
    }
}

console.log(rorateArray(arr1, 1));