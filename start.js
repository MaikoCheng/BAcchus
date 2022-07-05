let player1 = "";
let player2 = "";
let counter = 0;

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("card").click();
    }
});
let nederlands = [];
let english = [];
let sexytime = [];

function start() {
    if (playerlist.length > 1) {
        for (var i = 0; i < document.getElementsByClassName("playersbox").length; i++) {
            document.getElementsByClassName("playersbox")[i].style.display = "none";
        }
        document.getElementById("titlediv").style.display = "none";
        document.getElementById("gobacktopleft").style.display = "block";
        document.getElementById("cardholder").style.display = "flex";
        for (var i = 0; i < nederlandsoriginal.length; i++) {
            nederlands.push(nederlandsoriginal[i]);
        }
        for (var i = 0; i < englishoriginal.length; i++) {
            english.push(englishoriginal[i]);
        }
        for (var i = 0; i < sexytimeoriginal.length; i++) {
            sexytime.push(sexytimeoriginal[i]);
        }
        playgame();
    } else {
        alert("Not enough players entered!");
    }
}

var cardboard = document.getElementById("card");

function playgame() {
    
    counter += 1;
    gamelength = 30;
    chosenprompt = "";
    var card = document.getElementById("cardtext");
    
    setRandomPlayers();
    if (selectedgame === 2) {
        if (nederlands.length > 0 && counter < gamelength) {
            chosenprompt = nederlands[Math.floor(Math.random() * nederlands.length)]
            nederlands.splice(nederlands.indexOf(chosenprompt), 1);
        }else{
            counter = 0;
            goback();
        }
    } else if (selectedgame === 1) {
        if (english.length > 0 && counter < gamelength){
            chosenprompt = english[Math.floor(Math.random() * english.length)];
            english.splice(english.indexOf(chosenprompt), 1);
        }else{
            counter = 0;
            goback();
        }            
    } else if (selectedgame === 3) {
        if (sexytime.length > 0 && counter < gamelength){
            chosenprompt = sexytime[Math.floor(Math.random() * sexytime.length)];
            sexytime.splice(sexytime.indexOf(chosenprompt), 1);
        }else{
            counter = 0;
            goback();
        }
    }
    card.innerHTML = chosenprompt;
    card.innerHTML = card.innerHTML.replace("${player1}", player1);
    card.innerHTML = card.innerHTML.replace("${player2}", player2);


}

function setRandomPlayers() {
    player1 = playerlist[getRandomInt()];
    playerlist.splice(playerlist.indexOf(player1), 1);
    player2 = playerlist[getRandomInt()];
    playerlist.push(player1);
}
