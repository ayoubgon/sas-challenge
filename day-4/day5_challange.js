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
console.log(count_char("atoubsldj", "c"))
