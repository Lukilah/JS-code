function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
    
    var listOfNames = ["Angela", "Jeff", "Jessica", "Dwight"];
    var numberOfPeople = listOfNames.length;
        var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
            var randomPerson = listOfNames[randomPersonPosition];
    
        return randomPerson + " is going to buy lunch today!";
    /******Don't change the code below*******/    
    }
    
    whosPaying()