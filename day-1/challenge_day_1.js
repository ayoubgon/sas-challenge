//              Loops & Nested Loops
// level 1 
// While Loop Counting

let i = 0;
while(i <= 19 ){
    console.log(i);
    i++;
}

// Sum of First 100 Numbers

for(let o = 1, reso = 0 ; o <= 100 ; o++){
    reso += o;
}

// Multiplication Table

let namber = 5;
    for(let mul = 1;mul <=10 ;mul++){
        console.log(namber * mul);
    }
// level 2
 
// FizzBuzz

let k = 1;
while(k <= 50){
    if (k % 5 == 0 && k % 3 == 0)
        console.log("FizzBuzz");
    else if (k % 3 == 0 )
        console.log("Fizz");
    else if (k % 5 == 0)
        console.log("Buzz");
    else
        console.log(k);
    k++;
}


// Count Vowels (Loop)

let str = "ayoub";

for( let d = 0 , counter = 0 ;i < str.length; i++){
    if (str[d] == 'a' || str[d] == 'e' || str[d] == 'i' || str[d] == 'o' || str[d] == 'u')
        counter++;
    else if (str[d] == 'A' || str[d] == 'E' || str[d] == 'I' || str[d] == 'O' || str[d] == 'U')
        counter++;
   } 
   console.log(counter);

// Square of Stars\
for(let co = 0 ; co < 5; co++){
    for(let ro = 0 ; ro < 5 ; ro++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
// Prime Numbers
for (let rang = 3 ; Rang <=50 ; rang++){
    for(let checker = 2 ; checker < rang ;checker++ ){
        if (range % checker == 0){
            break;
        }
    }
    console.log(rang);
}
// Right-Angled Triangle
for(let i = 1 ; i <= 5 ;i++){
    let resolt = "";
    for(let j = 1; j <= i ; j++){
        resolt += "*";
    }
console.log(resolt);
}