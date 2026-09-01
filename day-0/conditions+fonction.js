

function valid_or_invalid (note){
  if (note >= 10)
    console.log("valid");
    else 
        console.log("invalid");
}

function batteryhealth(percentage){
    if (percentage >= 80)
        console.log("good conditio");
    else if (percentage >= 60)
        console.log("The battery is officially considered worn out.");
    else
        console.log ("Battery life generally becomes insufficient for normal daily use")
}

function typeofgame(game){
    switch (game){
        case "valorant" : console.log("fps game");
        break;
        case "elden ring": console.log("sole game");
        break
        case "fc 26": console.log("sport game");
        break
        default: console.log("not a game");
}
}
console.log ("valid_or_invalid")
valid_or_invalid(9);
valid_or_invalid(15);
console.log ("battery health")
batteryhealth(90);
batteryhealth(75);
batteryhealth(50);
console.log("typeofgame")
typeofgame("valoran");
typeofgame("elden ring");
typeofgame("fc 26");