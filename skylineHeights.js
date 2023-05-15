// You are given an array with heights of consecutive buildings in the city. For example, ​[-1,7,3]​ would represent three buildings: first is actually below street level, second is seven stories high, and third is three stories high (but hidden behind the seven-story onbe). You are situated at street level. Return an array containing heights of the buildings you can see, in order. Given ​[1,-1,7,3]​ return ​[1,7]​.

function skyline(arr){
    let max = 0;
    let visibleSkyline = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            visibleSkyline.push(arr[i]);
            max = arr[i];
        }
    }
    return visibleSkyline;
}

console.log(skyline([10,1,-1,7,3, 22,4, 35]))