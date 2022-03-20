function goback() {
    for (var i = 0; i < document.getElementsByClassName("playersbox").length; i++) {
        document.getElementsByClassName("playersbox")[i].style.display = "flex";
    }
    document.getElementById("titlediv").style.display = "flex";
    document.getElementById("gobacktopleft").style.display = "none";
    document.getElementById("cardholder").style.display = "none";
}