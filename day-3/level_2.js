// Day 3: Strings, String Functions
// Level 2 (Intermediate)
// Palindrome Check:
function Palindrome(str){
    let str_rev = "";
    for(let i = 0 ;i < str.length ; i++){
        str_rev += str[i];
    }
    if (str === str_rev)
        return true
    else
        return false
}
// String Reversal
function String_Reversal(str){
    let str_rev = "";
    for(let i = 0 ;i < str.length ; i++){
        str_rev += str[i];
    }
}
// Character Counter
function countChar(str, char){
    let counter = 0;
    for(let i = 0 ; i < str.length ; i++)
        if (str[i] === char)
            counter++;
    return counter;
}

// let str = "nalkdsnsdsgnggngsn"
// console.log(countChar(str, "n"))
// let str = "nan"
// console.log(Palindrome(str));