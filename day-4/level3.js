function flattens(arr){
    let flatten = []
    for (let i = 0 ;i < arr.length; i++){
        if (Array.isArray(arr[i]))
            flatten.push(...flattens(arr[i]))
        else
            flatten.push(arr[i])
    }
    return flatten
}
console.log(flattens([[3,5,6,7],[8,9,10,11]]))

// 3
// function matrix(arr){
//     let mat = []
//     for(let i = 0 ; i < arr.length ;i++){
//         console.log(arr[i].length)
//         for(let j = 0;j < arr[i].length;j++){
//             mat[j].push(arr[i][j]);
//         }
//     }
// }
console.log(flattens([[3,5,6,7],[8,9,10,11]]))



// let arr = [[3,[5],6,7],[8,9,10,11]]
// console.log(Array.isArray(arr[0][1]))
// console.log(arr[1].length)
// flattens([[3,5,6,7],[8,9,10,11]])
// console.log(flattens([[3,5,6,7],[8,9,10,11]]))

// let arr5= [[3,5,6,7],[8,9,10,11]]
// let arr3 =[] 
// console.log(arr5[0].length)
// console.log(arr5[1].length)

// arr3.push(arr5[0] + arr5[1])

// console.log(arr3)


