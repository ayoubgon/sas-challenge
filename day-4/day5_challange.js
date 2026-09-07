// challange 1

function conterpe(arr){
  let conterodd = 0 ;
  let conterevan = 0 ;
  for(let i = 0 ; i < arr.length ;i++){
    if (arr[i] % 2 == 0)
      conterevan++;
    else
      conterodd++;
  }
    // console.log(conterodd)
    // console.log(conterevan)
    // console.log (conterevan - arr.length)
}
// conterpe([2,4,5,3,5,6])

// challange 2


let arr = [3,4,5,2,38];
// let namber = [12, 5, 31, 8, 19];

let largest_namber;
function largest_nam(arr){
    largest_namber = arr[0];
for(let i = 0 ; i < arr.length ; i++)
    if (arr[i] > largest_namber)
        largest_namber = arr[i]
    return largest_namber;
}
// challange 3



function count_char(str, char) {
  let conter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char)
      conter++
  }
  return
}                             6
// console.log(count_char("atoubsldj", "c"))

// challange 4
function Custom_Reverse(arr){
    let arr_re = [];
    for(let i = arr.length - 1;i >= 0;i--){
        arr_re.push(arr[i])
    }
    return arr_re
}

// challange 5
function Count_Vowels(str){
    let conter = 0;
    for(let i = 0 ;i<str.length;i++){
        if (str[i]== "a" ||str[i]== "e" ||str[i]== "i" ||str[i]== "o" ||str[i]== "u" )
            conter++;
    }
    return conter
}

// challange 6

function Palindrome(str){
    let str_rev = Custom_Reverse(str)
    if (str_rev = str)
        return true
    else
        false
}

console.log ("level")
// challange 7




// challange 8
function Remove_Duplicates(arr){
    let stock = [];
    let k= 0;
    stock.push(arr[0])
    for(let i = 0 ; i < arr.length;i++){
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

// challange 9


function maxrep(arr){
    let max = 0 
    let conter = 0
    let ret = arr[0]
    for(let i = 1 ;i< arr.length;i++){
        conter = 0
        for(let j = 0 ;j < arr.length;j++){
            if (arr[i] == arr[j])
                conter++
        }
        if (max < conter){
            max = conter
            ret = arr[i]
        }
    }
    console.log(ret)
    return ret
}
// console.log(maxrep([1,2,2,3,5,6,6,6,1]))


// challange 15

function Anagram_Checker(str, str1){
    let backup = str1;
    if (str.length !=str.length)
        return false;
    for(let i = 0 ;i< str.length ;i++){
        let ex = 0 
        for(let j = 0 ; j < backup.length ; j++){
            if (str[i] == backup[j]){
                ex = 1
                backup = backup.slice(0,j) + backup.slice(j + 1)
                break
            }
        }
        if (ex != 1)
            return false
    }
    return true
}