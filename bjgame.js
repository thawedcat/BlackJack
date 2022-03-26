let player = {
    name: "ThawZin",
    chips: 145
}
let firstCard = getRamdomCard()
let secondCard = getRamdomCard()
let Cards = [firstCard, secondCard]
let sum =  firstCard + secondCard 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
console.log(messageEl)
let sumEl = document.querySelector("#sum-el")
console.log(sumEl)
let cardEl = document.querySelector("#card-el")


let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRamdomCard() {
    let ramdomCard = Math.floor(Math.random()*13)+1;
    if (ramdomCard === 1) {
        return 11;
    }
    if (ramdomCard > 10) {
        return 10;
    }
    return ramdomCard;
}

function startgame() {
isAlive = true;
cardEl.textContent = "cards: "
for (i = 0; i < Cards.length; i++) {
    cardEl.textContent += Cards[i] + " , "
}
sumEl.textContent = "sum: "+ sum ;
if (sum <= 20) {
    message = "Do you want to draw another card? 🤨"
    isAlive = true
}
else if (sum === 21) {
    message = "You've got Blackjack! 😮"
    hasBlackJack = true

}
else {
    message = "You're out of the game! 😶"
    isAlive = false
}
messageEl.textContent = message;
console.log(hasBlackJack)
console.log(isAlive)
}



function newcard() {
if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRamdomCard()
    sum += thirdCard;
    Cards.push(thirdCard);
    startgame();    
}
else {
    console.log("error")
    messageEl.textContent = "You are not allowed to draw cards anymore!"
}
}


