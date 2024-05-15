function getDiceNumber(){

//for the left dice    
var randomNumber1 = Math.floor(Math.random()*6)+1;
if(randomNumber1 === 1){
    document.querySelector("img.img1").setAttribute("src", "./images/dice1.png");
}if(randomNumber1 === 2){
    document.querySelector("img.img1").setAttribute("src", "./images/dice2.png");
}if(randomNumber1 === 3){
    document.querySelector("img.img1").setAttribute("src", "./images/dice3.png");
}if(randomNumber1 === 4){
    document.querySelector("img.img1").setAttribute("src", "./images/dice4.png");
}if(randomNumber1 === 5){
    document.querySelector("img.img1").setAttribute("src", "./images/dice5.png");
}if(randomNumber1 === 6){
    document.querySelector("img.img1").setAttribute("src", "./images/dice6.png");
}

//for the right dice
var randomNumberOne = Math.floor(Math.random()*6)+1;
if(randomNumberOne === 1){
    document.querySelector("img.img2").setAttribute("src", "./images/dice1.png");
}if(randomNumberOne === 2){
    document.querySelector("img.img2").setAttribute("src", "./images/dice2.png");
}if(randomNumberOne === 3){
    document.querySelector("img.img2").setAttribute("src", "./images/dice3.png");
}if(randomNumberOne === 4){
    document.querySelector("img.img2").setAttribute("src", "./images/dice4.png");
}if(randomNumberOne === 5){
    document.querySelector("img.img2").setAttribute("src", "./images/dice5.png");
}if(randomNumberOne === 6){
    document.querySelector("img.img2").setAttribute("src", "./images/dice6.png");
}

//for displaying who won the match
if(randomNumber1 > randomNumberOne){
    document.querySelector("h1").innerHTML = "Player 1 wins🚩";
}else if(randomNumber1 < randomNumberOne){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
} else{
    document.querySelector("h1").innerHTML = "It's a tie.";
}
}

getDiceNumber();
