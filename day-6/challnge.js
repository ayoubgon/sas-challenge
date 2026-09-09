let aa = [1,2,5,4]
function swap(arr,i, j){
    let a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
}
// swap(aa , 1 , 3)
// console.log(aa)
function Exchange_Sort(arr){
    for(let i = 0 ;i < arr.length - 1 ;i++)
        for(let j = i + 1 ;j < arr.length;j++)
            if (arr[i] > arr[j])
                swap(arr ,i ,j)
}

Exchange_Sort(aa)
// console.log(aa)

const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask a question and handle the response
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);

  // Ask follow-up question
  rl.question('How old are you? ', (age) => {
    console.log(`In 5 years, you'll be ${parseInt(age) + 5} years old.`);

    // Close the interface when done
    rl.close();
  });
});

// Handle application exit
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});