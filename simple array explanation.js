var guestList = ["Luki", "Joseph", "Maguire", "Kyle", "Sade", "Brittney"];
var guestName = prompt("What's your name?");

if(guestList.includes(guestName)){
    console.log( "You're invited to the party. Come in.")
}else{
    console.log( "You're not on the list, sorry.")
}