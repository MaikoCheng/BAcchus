
document.getElementsByClassName("cardtext")[0].innerHTML = playerlist[getRandomInt()];

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(playerlist.length-1));
}