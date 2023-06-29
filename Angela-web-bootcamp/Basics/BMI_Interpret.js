function bmiCalculator( weight, height){
        BMI = Math.round(weight / (height * height))
        if (BMI < 18.5) {
            interpretation = "Your BMI is " + BMI + " , so you are underweight."
        }
        if (BMI > 18.5 && BMI < 25) {
            interpretation = "Your BMI is " + BMI + " , so you have a normal weight."

        }
        if (BMI > 25) {
            interpretation = "Your BMI is " + BMI + " , so you are overweight."

        }

        return interpretation
    
}


var result = bmiCalculator(55, 1.8); 
console.log(result)