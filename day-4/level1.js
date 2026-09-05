// Array Basics: Create an array of 3 colors. Add a new color to the end,
//  remove the first color, and log the final array.

// Array Sum: Create an array of 5 numbers. Iterate through it with a loop
//  and calculate the total sum.

// Element Existence: Write a function that takes an array and a value,
//  returning true if the value exists in the array and false otherwise
//  (without using .includes()).

// Array Basics
// let arr = ["yallow","blue","red"];
// arr.push("black");
// console.log("add",arr);
// arr.splice(0,1)
// console.log("dellet",arr);

// Array Sum:
// let arr = [2,3,4,5,0];
// let total = 0;
// for(let i = 0;i < arr.length;i++){
//     total += arr[i];
// }
// console.log(total);

// Element Existence:
function Element_Existence(arr , check){
    for(let i = 0 ;i < arr.length ; i++){
        if (arr[i]==check)
            return true
    }
    return false
}
console.log (Element_Existence([1,2,4,2,61,],5));

