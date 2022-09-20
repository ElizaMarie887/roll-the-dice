const prompt = require('prompt-sync')({sigint: true});

let number1 = Number(prompt("Enter the number of sides you want on your dice: "));

let number2 = Math.ceil(Math.random()* number1)

console.log("You rolled a " + number2 + " with your " + number1 + " sided dice!")