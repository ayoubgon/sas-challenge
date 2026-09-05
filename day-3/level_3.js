// Day 3: Strings, String Functions
// Level 3 (Advanced)
// Capitalize Words

function Capitalize(str){
    let word = str.split(" ");
    for(let i = 0 ; i < word.length ; i++){
      let fr = word[i].charAt(0); 
      fr = fr.toUpperCase();
      word[i] = fr + word[i].slice(1)
          // word[i][0].toUpperCase();
    }
  str = word.join(" ");
    console.log(str)
}
// String Compressor
function String_Compressor(str){
    let counter = 1;
    let ret = "";
    for(let i = 0;i < str.length;i++){
        for(let j = i ;j <str.length;j++)
            if (str[i] == str[j + 1]){
                counter++;
            }
            else if (str[i] != str[j + 1]){
                i = j;
                break;
            }
            ret += str[i] + counter;
      counter = 1;
    }
    return ret
}
// Anagram Checker
function Anagram_Checker(str, str1){
    if (str.length !=str.length)
        return false;
    for(let i = 0 ;i< str.length ;i++){
        let ex = 0 
        for(let j = 0 ; j < str.length ; j++){
            if (str[i] == str1[j])
                ex = 1
        }
        if (ex != 1)
            return false
             
    }
    return true
}


console.log(Anagram_Checker("minora", "romain"))
// test
str = "aaabbc";
console.log(String_Compressor(str));
Capitalize("lkashd asdalhdk dsadhikl");
