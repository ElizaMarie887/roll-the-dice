const prompt = require('prompt-sync')({sigint: true});

let number1 = Number(prompt("Enter your rigged number (1-6) for my six sided dice: "))

let number2 = Math.ceil(Math.random()*7)

if(number1 === 1 && number2 === 1){
    console.log("Your rolled a 1")
}else if (number1 === 1 && number2 === 2){
    console.log("You rolled a 2")
}else if (number1 === 1 && number2 === 3){
    console.log ("You rolled a 3")
}else if (number1 === 1 && number2 === 4){
    console.log ("You rolled a 4")
}else if (number1 === 1 && number2 === 5){
    console.log ("You rolled a 5")
}else if (number1 === 1 && number2 === 6){
    console.log ("You rolled a 6")
}else if (number1 === 1 && number2 === 7){
    console.log ("You rolled a 1")
}else if(number1 === 2 && number2 === 1){
    console.log("Your rolled a 1")
}else if (number1 === 2 && number2 === 2){
    console.log("You rolled a 2")
}else if (number1 === 2 && number2 === 3){
    console.log ("You rolled a 3")
}else if (number1 === 2 && number2 === 4){
    console.log ("You rolled a 4")
}else if (number1 === 2 && number2 === 5){
    console.log ("You rolled a 5")
}else if (number1 === 2 && number2 === 6){
    console.log ("You rolled a 6")
}else if (number1 === 2 && number2 === 7){
    console.log ("You rolled a 2")
}else if(number1 === 3 && number2 === 1){
    console.log("Your rolled a 1")
}else if (number1 === 3 && number2 === 2){
    console.log("You rolled a 2")
}else if (number1 === 3 && number2 === 3){
    console.log ("You rolled a 3")
}else if (number1 === 3 && number2 === 4){
    console.log ("You rolled a 4")
}else if (number1 === 3 && number2 === 5){
    console.log ("You rolled a 5")
}else if (number1 === 3 && number2 === 6){
    console.log ("You rolled a 6")
}else if (number1 === 3 && number2 === 7){
    console.log ("You rolled a 3")
}else if(number1 === 4 && number2 === 1){
    console.log("Your rolled a 1")
}else if (number1 === 4 && number2 === 2){
    console.log("You rolled a 2")
}else if (number1 === 4 && number2 === 3){
    console.log ("You rolled a 3")
}else if (number1 === 4 && number2 === 4){
    console.log ("You rolled a 4")
}else if (number1 === 4 && number2 === 5){
    console.log ("You rolled a 5")
}else if (number1 === 4 && number2 === 6){
    console.log ("You rolled a 6")
}else if (number1 === 4 && number2 === 7){
    console.log ("You rolled a 4")
}else if(number1 === 5 && number2 === 1){
    console.log("Your rolled a 1")
}else if (number1 === 5 && number2 === 2){
    console.log("You rolled a 2")
}else if (number1 === 5 && number2 === 3){
    console.log ("You rolled a 3")
}else if (number1 === 5 && number2 === 4){
    console.log ("You rolled a 4")
}else if (number1 === 5 && number2 === 5){
    console.log ("You rolled a 5")
}else if (number1 === 5 && number2 === 6){
    console.log ("You rolled a 6")
}else if (number1 === 5 && number2 === 7){
    console.log ("You rolled a 5")
}else if(number1 === 6 && number2 === 1){
    console.log("Your rolled a 1")
}else if (number1 === 6 && number2 === 2){
    console.log("You rolled a 2")
}else if (number1 === 6 && number2 === 3){
    console.log ("You rolled a 3")
}else if (number1 === 6 && number2 === 4){
    console.log ("You rolled a 4")
}else if (number1 === 6 && number2 === 5){
    console.log ("You rolled a 5")
}else if (number1 === 6 && number2 === 6){
    console.log ("You rolled a 6")
}else if (number1 === 6 && number2 === 7){
    console.log ("You rolled a 1")
}else {
    console.log ("Error")
}