function afficherPairs(n){
    for(let i = 1 ;i <= n;i++){
        if (i % 2 == 0)
            console.log(i);
    }
}

function compterPairs(nbr1, nbr2) {
    let co = nbr1;
    let pair_conter = 0;
    while(co <= nbr2){
        if ((nbr1 + nbr2 + co) % 2 == 0 )
            pair_conter++;
        co++;
    }
    return (pair_conter);
}
function construireTriangle(taille) {
    
    for(let i = 0 ;i < taille ;i++){
        let line = "";
        for(let j = 0 ; j <= i ; j++){
            line = line + j;
        }
        console.log(line);
    }
}


// construireTriangle(5);
// console.log (compterPairs(2 , 10));

// afficherPairs(77);