// Day 6: Search & Sort Algorithms
// Level 2 (Intermediate)
// Bubble Sort:
let aa = [1,2,5,4]
function swap(arr,i, j){
    let a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
}
function Bubble_Sort(arr){
    for (let j = 0 ;j < arr.length;j++){
        for(let i = 0 ;i < arr.length - 1 ;i++)
            if (arr[i] > arr[i + 1])
                swap(arr ,i ,i + 1)
    }
}
function Exchange_Sort(arr){
    for(let i = 0 ;i < arr.length - 1 ;i++)
        for(let j = i + 1 ;j < arr.length;j++)
            if (arr[i] > arr[j])
                swap(arr ,i ,j)
}
Bubble_Sort(aa)
console.log(aa)
