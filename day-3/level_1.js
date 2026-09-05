// Day 3: Strings, String Functions
// Length & Uppercase

function len_uper(str){
    let l = str.length;
    str = str.toUpperCase();
    console.log(l , str);
}
// First & Last Char:
function first_last(str){
    console.log(str[0]);
    console.log(str [str.length - 1])
}
// Word Replacer:
function world_replace(str,name,replace){
    str = str.replace(name,replace);
    console.log(str);
}



// let str = "I love apples";
//  world_replace(str)
// first_last("sfhsflhd fldihflshof hfs")

// len_uper("ajfooa")