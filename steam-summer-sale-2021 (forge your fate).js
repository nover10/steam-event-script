/*
 * Made by Nover Peter (nover10)
 * This script will random choice answer.
 */

function getIntRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function getChoices() {
    let choices = new Array();
    for (let i = 1; i <= 14; i++) {
        choices.push(getIntRandom(1, 3));
    }
    return choices;
}

let answer = getChoices();
for (let i = 1; i <= 14; i++) {
    jQuery.post("https://store.steampowered.com/promotion/ajaxclaimstickerforgenre", { genre: i, choice: answer[i - 1], sessionid: g_sessionID }, (res) => console.log("story " + i + ":", res))
}

console.log('Your answer: ' + answer.join(','));