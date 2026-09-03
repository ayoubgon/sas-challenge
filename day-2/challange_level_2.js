// Day 2: Functions & Arrow Functions
// Level 2 (Intermediate)

// Temperature Converter
function celsiusToFahrenheit(c){
    return ((c * 9/5) + 32);
}

// String Emptiness Check
let isEmpty = (str) => {
    if (!str || str == " " || str.length === 0)
        return true ;
    else 
        return false;
}

// Factorial Calculator
function factorial(n){
    let i = 1;
    let fac = 1;
    while(i <= n){
        fac *= i++;
        console.log(fac); 
    }
}




// test function// let stock = celsiusToFahrenheit(55)
// console.log(celsiusToFahrenheit(55));
factorial(5);