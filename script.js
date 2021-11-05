const perArr = ['Your mum', 'Your Dad', 'Your sister', 'Your brother', 'Sheila', 'Karen', 'Dominic', 'Alfred'];
const actionArr = ['eats coconuts', 'shreds newspapers', 'scrolls instagram', 'chews tobacco', 'paints walls', 'kills ants', 'mimics animals', 'falls over', 'flies upside down'];
const outcomeArr = ['and makes a good living doing it', 'and wishes they had never been born', 'and craves more carbs', 'and shits bricks'];

const randPer = () => {
    return Math.floor((Math.random()*perArr.length));
}

const randAction = () => {
    return Math.floor((Math.random()*actionArr.length));
}

const randOutcome = () => {
    return Math.floor((Math.random()*outcomeArr.length));
}

const genSentence = (num1, num2, num3) => {
    return console.log(perArr[num1] + ' ' + actionArr[num2] + ' ' + outcomeArr[num3]);
}

genSentence(randPer(), randAction(), randOutcome());