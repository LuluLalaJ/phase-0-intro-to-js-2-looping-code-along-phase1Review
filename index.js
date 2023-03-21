// Code your solutions in this file
function writeCards(names, adj) {
    let cards = []
    for (let name of names) {
        cards.push(`Thank you, ${name}, for the wonderful ${adj} gift!`)
    }
    return cards;
}

//SYNTAX -- for of 

function countDown(num) {
    let i = num
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

