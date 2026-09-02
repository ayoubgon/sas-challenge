//Level 1 (Beginner)
//Age Logger
let age = 25;
console.log(`You are ${age} years old.`);

let temperature;
//Temperature Check
if (temperature > 30)
    console.log("It's hot outside!");
else
    console.log("The weather is nice.");
//Even or Odd
let number;
    if (number % 2 != 0)
        console.log("odd");
    else
        console.log("even");
//Level 2 (Intermediate)
//Grading System
let score;
if (score >= 90 && score <= 100)
    console.log("A");
else if (score >= 80)
    console.log("B");
else if (score >= 70)
    console.log("C");
else
    console.log("F");
//Max of Three
let res;
let nam1 = 5;
let nam2 = 2;
let nam3 = 9;
if (nam1 >= nam2)
    res = nam1;
else if (nam1 <= nam2)
    res = nam2;
if (res >= nam3)
    console.log("nam3")
else
    console.log(res);

//Leap Year Checker
let Year;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    console.log(true);
else
    console.log(false);

//level 3
//Basic Calculator
let num1 = 23 ;
let num2 = 34 ;
const operator = ["+", "-", "*", "/"];
switch (operator[]){
    case operator[0]:
        console.log(num1 + num2);
        break
    case operator [1]:
        console.log(num1 - num2);
        break
    case operator[0]:
        console.log(num1 * num2);
        break
    case operator [1]:
        if (num1 == 0 || num2 == 0)
            break
        console.log(num1 / num2);
        break
    }

    //Valid Triangle
    let ang1;
    let ang2;
    let ang3;
    if (ang1 == 0 || ang2 == 0 || ang3 ==0)
        console.log("not triangle")
    else if (ang1 + ang2 + ang3 != 180)
        console.log("not triangle")
    else
        console.log("it triangle")

    //BMI Calculator
    let weight ;
    let height ;
    let BMI = weight / (height * height)

    if (BMI < 18.5)
        console.log("Underweight");
    else if (BMI <= 24.9 && BMI >= 18.5)
        console.log("Normal");
    else
        console.log("Overweight");


/*
    let year;
if (year % 4 == 0 && year % 100 != 0)
    console.log(true);
else if (year % 400 == 0)
    console.log(true);
else
    console.log(false);*/
