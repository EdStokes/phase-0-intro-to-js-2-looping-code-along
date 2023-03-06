// Code your solutions in this file
const name = ["Guadalupe", "Ollie", "Aki"]
const gift = "surprise"

function writeCards(name, gift) {
    let thankYou = []
    for (let i = 0; i < name.length; i++) {
        thankYou.push(`Thank you, ${name[i]}, for the wonderful ${gift} gift!`)
    }
    return thankYou
}

function countDown() {
    let number = 11
    while (number--) {
        console.log(number)
    }
    

}
