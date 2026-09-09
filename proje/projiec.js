var prompt = require('prompt-sync')();
const studants = [ { name: 'ayoub', age: 12, note: 20 } ,
     { name: 'dehbi', age: 20, note: 20 } ,
     { name: 'karim', age: 11, note: 20 }]

function add_name(){
    for(;;){
        let name = prompt("add name of the studant")
        if (name.trim != "")
            return name
    }
}
function add_age(){
    for(;;){
        let age = Number(prompt("add age of the studant"))
        if (age <= 60 && age >= 6){
            return age 
        }
    }
}
function add_note(){
    for(;;){
        let note =  Number(prompt("add note of the studant"))
        if (note >= 0 && note <= 20)
            return note
    }
}
function add_Std(stud) {
    let stud_pu = {}
    stud_pu.name = add_name();
    stud_pu.age = add_age();
    stud_pu.note = add_note();
    stud.push(stud_pu);
    console.log("Success");
}
function show_stud(obje){
        if(obje.length > 0){
            for(let i = 0 ; i < obje.length ; i++){
            console.log(`*******stud ${i}*******`)
            console.log("name = ",obje[i].name)
            console.log("age = ",obje[i].age)
            console.log("note = ",obje[i].note)
            console.log(`********************`)
            }
        }
}
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
function sort_age(obj){
    for (let j = 0 ;j < obj.length;j++){
        for(let i = 0 ;i < obj.length - 1 ;i++)
            if (obj[i].age > obj[i + 1].age)
                swap(obj ,i ,i + 1)
    }
}
function Search_st(obj){
    for(let i = 0;i < obj.length ;i++){
        of
    }
}

function main() {
    let n;
    do {
        console.log("************************");
        console.log("1. Ajouter Std");
        console.log("2. Afficher Std");
        console.log("3. sort Std")
        console.log("4. Rechercher Std");
        console.log("5. Modifier Std");
        console.log("6. Supprimer Std");
        console.log("7. Quitté");
        console.log("************************");
    
        n = Number(prompt("Tapez un choix (1-7)"))
        switch (n) {
            case 1:
                add_Std(studants)
                break;
            case 2:
                show_stud(studants)
                break;
            case 3:
                sort_age(studants)
                break;
            case 4:
                
                break;
            case 5:
                
                break;
            case 6: 
            
                break;
            case 7: 
            
                break;
        
            default:
                console.log("Votre reposne n'etait pas acceptable, Svp donne moi une valeur entre 1 et 6");
                break;
        }
    } while (n!=7)
}

main()

[ { name: 'ayoub', age: 12, note: 20 } ,
     { name: 'dehbi', age: 20, note: 20 } ,
     { name: 'karim', age: 11, note: 20 }]
