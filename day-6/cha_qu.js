let arr = [[0,1,2],[3,4,5],[6,7,8]]
function matrix(arr){
    let ret_arr = []
    for (let i = 0 ; i < arr ;i++ )
        for(let j = 0 ; j < arr.length ; j++ )
            ret_arr[i][j].push(arr[j][i])
    console.log (ret_arr);
}
// matrix(arr)

function my_length(str){
    let i = 0;
    for( let ind of str ){
        i++;
    }
    return i 
}

let string = "ayoub"
my_length(string)


function superdigit(num){
    let sum = 0;
    if(num > 10){
        for(let i = 0 ;i < num.length;i++)
        {
            sum += Number (num[i])
        }        
        if (sum < 10)
            console.log(sum)
        else if (sum > 10){
            superdigit(sum)
        }
    }
    else
        console.log(num)
} 
superdigit("513682")