const prompt = require('prompt-sync')({sigint: true});

let number1 = Number(prompt("Enter your rigged number (1-6) for my six sided dice: "))

let number2 = Math.ceil(Math.random()*6)

