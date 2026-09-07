// Day 5: Objects & Arrays of Objects
// Level 2 (Intermediate)
// Oldest Person
let arr_per = [
     {
        name : "ayoub",
        age : 25
    },
    {
        name : "ayoub",
        age : 26
    },
    {
        name : "ayoub",
        age : 15
    }
]
function Find_Maximum(arr){
    let stock = 0;
    for(let i = 0 ;i < arr.length;i++){
        if(stock < arr[i].age)
            stock = arr[i].age;
    }
  return stock
}
// console.log(Find_Maximum(arr_per))
function stock_checker(){
let product = [
    {name : "DEEPCOOL",price : 1000 ,inStock:true},
    {name : "r 7 5700x3d",price : 2000 ,inStock:false},
    {name : "32GB DDR4",price : 1600 ,inStock:true}
]
let new_arr = []
for (let i = 0;i<product.length;i++){
    if (product[i].inStock == true){
        new_arr.push({name:product[i].name , price:product[i].price , inStock:product[i].inStock})
    }
}
return new_arr
}
// console.log(stock_checker())

// Cart Total:

function cart_total(){
    let total = 0 ;
    let cart = [
        {name : "DEEPCOOL",price : 1000 ,quantity:2},
        {name : "r 7 5700x3d",price : 2000 ,quantity:5},
        {name : "32GB DDR4",price : 1600 ,quantity:3}
    ]
    for (prod in cart){
        total += cart[i].quantity * cart[i].price
    }
    // return total
console.log(total)
}
cart_total




