'use strict'

var p1Name = null;
var p2Name = null;
var btnStart = null;
var error = null;
var redError = null;
var blueError = null;
var playerNames = [];

var validateInput = function () {
    redError.style.display = "none";
    blueError.style.display = "none";
    var isValid = true;
    if (p1Name.value.length < 3) {
        p1Name.value = '';
        redError.style.display = "flex";
        isValid = false;
    }
    if (p2Name.value.length < 3) {
        p2Name.value = '';
        blueError.style.display = "flex";
        isValid = false;
    }
    return isValid;
}



var savePlayerNames = function () {
    playerNames.push({ namep1: p1Name.value, namep2: p2Name.value });
    localStorage['playersNames'] = JSON.stringify(playerNames);
}

var nextPage = function () {
    savePlayerNames();
    var newGame = true;
    localStorage['newGame'] = JSON.stringify(newGame);
    location.href = 'game.html';
}

window.onload = function () {
    p1Name = document.getElementById('p1-name');
    p2Name = document.getElementById('p2-name');
    btnStart = document.getElementById('start-btn');
    redError = document.getElementById("redError");
    blueError = document.getElementById("blueError");
    btnStart.addEventListener('click', function () {
        (validateInput()) ? nextPage() : console.log('Debe completar los inputs de la forma requerida');
    });
}