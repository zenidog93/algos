//Sigma
// Implement a function ​sigma(num)​ that, given a number, returns the sum of all positive integers from 1 up to number (inclusive). 

// Ex.: ​sigma(3) = 6 (or 1+2+3); ​sigma(5)​ = 15 (or 1+2+3+4+5).

function sigma(value){
    let sum = 0;
    for(let i = 0; i<value; i++){
        sum += i;
    }
    return sum;
}

// answer = sigma(6);
// console.log(answer);

//Factorial
// Write a function ​factorial(num)​ that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). 

// For example, ​factorial(3)​ = 6 (or 1 * 2 * 3); factorial(5)​ = 120 (or 1 * 2 * 3 * 4 * 5).

function factorial(value){
    let product = 1;
    for(let i = 1; i<value+1; i++){
        product *= i;
    }
    return product;
}

// answer = factorial(5);
// console.log(answer);

// Create function ​ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 ​but not both​. Display the final sum in the console.

function threesFives(start, end){
    let sum = 0;
    for(let i= start; i<= end; i++){
        if(i%3 ==0 && i%5 ==0){
            // console.log("divisible by 3 and 5: ", i);
            continue;
        }
        if(i%3==0 || i%5==0){
            sum+= i;
            // console.log("sum: ", sum);
            // console.log("i: ", i)
        }
        
    }
    return sum;
}


// let answer = threesFives(1,30)
// console.log(answer);

function generateCoins(cents){
    let numOfQ = 0;
    let numOfD = 0;
    let numOfN = 0;
    let numOfP =0;
    while(cents>0){
        if(cents%25==0){
            numOfQ +=1;
            cents-=25;
        }
        else if(cents%10==0){
            numOfD +=1;
            cents-=10;

        }
        else if(cents%5==0){
            numOfN +=1;
            cents-=5;

        } else {
            numOfP = cents;
            return;
        }
    }
    console.log("numOfQ: ", numOfQ);
    console.log("numOfD: ", numOfD);
    console.log("numOfN: ", numOfN);
    console.log("numOfP: ", numOfP);
    return;
}
generateCoins(27);