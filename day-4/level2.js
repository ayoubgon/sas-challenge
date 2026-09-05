// Level 2 (Intermediate)
// Find Maximum: Write a function that takes an array of numbers
//  and returns the largest number (without using Math.max).

function Find_Maximum(arr){
    let stock = 0;
    for(let i = 0 ;i < arr.length;i++){
        if(stock < arr[i])
            stock = arr[i];
    }
  return stock
}

// Remove Duplicates: Write a function that takes an array with
//  duplicate values and returns a new array with only unique values.
function Remove_Duplicates(arr){
    let stock = [];
    let k= 0;
    stock.push(arr[0])
    for(let i = 0 ;i < arr.length;i++){
        for(let j = 0 ;j < stock.length ;j++){
          k = j
            if (arr[i] == stock[j])
                break
        }
        if (arr[i] != stock[k])
          stock.push(arr[i])
    }
    return stock
}


// Custom Reverse: Write a function that reverses an array in place
//  without using the built-in .reverse() method.
function Custom_Reverse(arr){
    let arr_re = [];
    for(let i = arr.length - 1;i >= 0;i--){
        arr_re.push(arr[i])
    }
    return arr_re
}

// Find Maximum:
console.log(Custom_Reverse([1,2,3,4,5,6]))
// console.log(Remove_Duplicates([21,21,1,4214,4,14,4]))
