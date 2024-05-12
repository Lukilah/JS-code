function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        //Write your code here.
        var timeLeft = 90 - age;
        var x_days_left = timeLeft * 365;
        var y_weeks_left = timeLeft * 52;
        var z_months_left = timeLeft * 12;
        console.log("You have " + x_days_left + " days, " + y_weeks_left + " weeks," + " and " + z_months_left + " months left.")
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(56);