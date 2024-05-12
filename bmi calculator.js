function bmiCalculator(weight, height){
    BMI = Math.round(weight/(Math.pow(height, 2)));
    return BMI;
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi)