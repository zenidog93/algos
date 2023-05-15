// Statistics to Doubles
// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles arerolled.Displaythe​numberofrolls​,​min,​ ​max,​ and ​average​.

function doubles(){
    let count = 0;
    let roll1 = 1;
    let roll2 = 2;
    let min = 12;
    let max = 2;
    let average = 0;
    while(roll1 != roll2){
        roll1= Math.floor(Math.random() * 6) + 1;
        roll2 = Math.floor(Math.random() * 6) + 1;
        sum = roll1+roll2;
        count++;
        if(sum <12 ){
            min = sum;
        }
        if(sum>2){
            max = sum
        }
        average = average+ sum;
        console.log(roll1, roll2, count);
    }
    console.log("average: ", Math.floor(average/count))
    console.log("min: ", min);
    console.log("max: ", max);
    return count;
}

// console.log(doubles());

// Sum To One Digit
// Implement a function ​sumToOne(num)​ that, given a number, sums that number’s digits repeatedly until the sum is only one digit. Return thatfinalonedigitresult.

function sumToOne(num) {
    // Keep looping until num is a single digit
    while (num >= 10) {
    let sum = 0;
      // Split the number into its digits and sum them
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
      num = sum; // Update num to be the sum of its digits
}
    return num;
}

// console.log(sumToOne(322));

function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}

// console.log(fib(9))

function lastDigitAtoB(a,b){
    let product = 1;
    if(a <0 || b < 0){
        console.log("inputs must be a positive number. try again")
    } else {
        
        for(let i = 0; i<b; i++){
            product *=a;
        }
    }
    let text = product.toString();
    console.log(text);
}

lastDigitAtoB(199,12)