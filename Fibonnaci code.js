function fibonacciGenerator (n) {

    var fibonacciSeq = [];
    var numOne = 0;
    var numTwo = 1;
    var sum;
    
        for(i = 0; i < n; i++){
            if(i === 0){
                fibonacciSeq.push(i);
            } else if(i === 1){
                fibonacciSeq.push(i);
            }else{
            sum = numOne + numTwo;
            numOne = numTwo;
            numTwo = sum;
            fibonacciSeq.push(sum)
        }
            }
    
        return fibonacciSeq;
        
    }