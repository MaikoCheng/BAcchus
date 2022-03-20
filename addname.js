let playerlist = []
var input = document.getElementById("addplayerh1");
let selectedgame = 2;
input.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    event.preventDefault();
    if (input.value.length > 0 && input.value.trim() !== "") {
        playerlist.push(input.value);
        var button = document.createElement("button");
        var myDiv = document.getElementById("playercontainer");
        button.appendChild(document.createTextNode(input.value));
        button.className = "playerbutton grow";
        button.onclick = function() {
            myDiv.removeChild(button);
            playerlist.splice(playerlist.indexOf(input.value), 1);
        };
        myDiv.appendChild(button);
        input.value = "";
    }else{
        alert("No name entered!");
        input.value = "";
    }
  }
});


function clickplayer(){
    if (input.value.length > 0) {
        playerlist.push(input.value);
        var button = document.createElement("button");
        var myDiv = document.getElementById("playercontainer");
        button.appendChild(document.createTextNode(input.value));
        button.className = "playerbutton";
        button.classList.add("grow");
        button.onclick = function() {
            myDiv.removeChild(button);
            playerlist.splice(playerlist.indexOf(input.value), 1);
            console.log(playerlist);
        };
        myDiv.appendChild(button);
        input.value = "";
    }else{
        alert("No name entered!");
    }
}

function selectgame(game) {
    selectedgame = game;
    switch (selectedgame){
        case 1:
            document.getElementById("englishgame").style.padding = "10px" ;
            document.getElementById("dutchgame").style.padding = "0px";
            document.getElementById("sexygame").style.padding = "0px";
            break;
        case 2:
            document.getElementById("englishgame").style.padding = "0px";
            document.getElementById("dutchgame").style.padding = "10px";
            document.getElementById("sexygame").style.padding = "0px";
            break;
        case 3:
            document.getElementById("englishgame").style.padding = "0px";
            document.getElementById("dutchgame").style.padding = "0px";
            document.getElementById("sexygame").style.padding = "10px";
            break;

    }
}

function getplayerslist() {
    return playerlist;
}

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(playerlist.length-1));
}