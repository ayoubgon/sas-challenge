// Day 6: Search & Sort Algorithms
// Level 1 (Beginner)
// Linear Search Implementation

function linearSearch(array, target){
    for(let i = 0 ;i<array.length;i++)
        if (array[i] === target )
            return i
    return -1
}
// Find Minimum Index
let largest_namber;
function Find_Minimum_Index(arr){
    Minimum_namber = arr[0];
for(let i = 0 ; i < arr.length ; i++)
    if (arr[i] < Minimum_namber)
        Minimum_namber = arr[i]
    return linearSearch(arr,Minimum_namber);
}
// Count Occurrences Search
function Count_Occurrences_Search(){
    let counter = 0 
        for(let i = 0 ;i<array.length;i++)
        if (array[i] === target )
            counter++
    return counter
}






