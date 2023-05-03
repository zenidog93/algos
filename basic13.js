// Print all the integers from 1 to 255.

// for(let i = 1; i<256; i++){
//     console.log(i);
// }

//Print integers from 0 to 255, and with each integer print the sum so far.
// sum = 0;
// for(let i =0; i<256; i++){
//     console.log(i);
//     sum+=i;
//     console.log(sum);
// }

// Given an array, find and print its largest element.

// let sampleArray= [30, 1,4,10,2,4, 20];
// max = 0; 
// for(let i = 0; i<sampleArray.length;i++){
//     if(sampleArray[i] > max){
//         max = sampleArray[i];
//     }
// }
// console.log(max);


// Create an array with all the odd integers between 1 and 255 (inclusive).
// function onlyOdds(start,end){
//     for(let i = start; i<end; i++){
//         if(i%2==1){
//             console.log(i);
//         }
//     }
// }
// onlyOdds(1,255);

// Given an array and a value Y, count and print the number of array values greater than Y.

// function findY(arr, target){
//     count = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>target){
//             count++;
//         }
//     }
//     console.log(count);
// }

// findY([1,2,3,4,5], 4);

// Given an array, print the max, min and average values for that array

// function findingValues(arr){
//     let max = 0;
//     let min = arr[0];
//     let average = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         if(arr[i] < min){
//             min = arr[i];
//         }
//         average = average+ arr[i];

//     }
//     average=average/arr.length;
//     console.log("average: ", average);
//     console.log("max: ", max);
//     console.log("min: ", min);
// }

// findingValues([10,2,-2,4,5])

// Replace any negative array values with ​'Dojo'​.

// function findNegatives(arr){
//     let tempArr = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]< 0){
//             arr[i] = "dojo";
//             tempArr.push("dojo");
//         } 
//         else {
//             tempArr.push(arr[i]);
//         }
//     }
//     console.log(arr);
//     console.log(tempArr);
// }

// findNegatives([2,1,-2,3,-4]);

// Square each value in a given array, returning that same array with changed values.

// function squareValues(arr){
//     for(let i = 0; i<arr.length; i++){
//         arr[i] = arr[i] * arr[i];
//     }
//     return arr
// }

// let answer = squareValues([1,2,3,4]);
// console.log(answer);

// Given an array, move all values forward by one index, dropping the first and leaving a ​'0'​ value at the end.

function shiftValues(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
        if(arr[i] == null){
            arr[i] =0;
        }
    }
    return arr;
}

let answer = shiftValues([1,2,3,4, 5, 6]);
console.log(answer);