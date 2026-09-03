// Day 2: Functions & Arrow Functions
// Level 3 (Advanced)

// Math Callback
let subtraction = (a , b) => a - b;
let addition = (a , b) => a + b ;
function calculate(a, b, operation){
    switch(operation){
        case "-" : return (subtraction(a, b));
        case "+" : return (addition(a,b));
    }
}
// Closure Intro
const mul = (num , multi) =>  num * multi;

function createMultiplier(multiplier){
    return mul(2 , multiplier);
}
// Custom Filter Outline
const checkodd = (a) => a % 2 != 0 ? true : false ;

function filterOddNumbers(arr, callback){
    let i = 0, j = 0;
    let arr_re = [];
    while(arr[i]){
        if (checkodd(arr[i])){
            arr_re[j] = arr[i];
            j++;
        }
        i++;
    } 
}
// test fun
console.log (createMultiplier(3));
