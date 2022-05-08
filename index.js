
let cards = []

let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//object



let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    
    let randomNumber = Math.floor (Math.random() * 14)

    if(randomNumber > 10)
    {
        return 10
    } else if (randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }

}


function startGame() {


let firstCard = getRandomCard()
let secondCard = getRandomCard()

cards = [firstCard,secondCard]
sum = firstCard + secondCard



    isAlive = true
    renderGame()
}


function renderGame() {


    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

        sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
        } else if(sum === 21){
            message = "Good job"
            hasBlackJack = true
        } else {
            message = "Out of the game"
            isAlive = false
        }
        


        messageEl.textContent = message

}


function newCard() {

    if(isAlive === true && hasBlackJack === false){
let card = getRandomCard()

sum += card

cards.push(card)
console.log(cards)

renderGame()
    }
}



