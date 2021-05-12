var massJohn = 80;
var massMark = 75;

var heightJohn = 1.80;
var heightMark = 1.75;

var bmiJohn = massJohn/(heightJohn*heightJohn);
var bmiMark = massMark/(heightMark*heightMark);

console.log('BMI of John = ', bmiJohn);
console.log('BMI of Mark = ', bmiMark);

var isMarkHigherThanJohn = bmiMark > bmiJohn;
console.log("Is BMI of Mark higher than John ? ", isMarkHigherThanJohn);