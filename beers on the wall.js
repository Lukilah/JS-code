var numberOfBottles = 99;

function bottleSong(){
while (numberOfBottles > 0){
    console.log(numberOfBottles + " bottles of beer on the wall," + numberOfBottles + " bottles of beer. Take one down and pass it around," + numberOfBottles + " bottles of beer on the wall.");
    numberOfBottles--;
    if(numberOfBottles === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}
}

bottleSong();