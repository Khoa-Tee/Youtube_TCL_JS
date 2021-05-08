function callBMI() {
    //console.log('thisBMI: ', this);
    this.bmiValue = this.mass / (this.height*this.height);
    //return this.mass / (this.height*this.height);
}

/* var callBMI2 = function() {
    console.log('thisBMI: ', this);
    return this.mass / (this.height*this.height);
} */

console.log("callBMI: ", typeof callBMI);
//console.log("callBMI2: ", typeof callBMI2);

var John = {
    fullName: 'John Smith',
    mass: 60,
    height: 1.70,
    BMI: callBMI,
   /*  callBMI: function() {
        return this.mass / (this.height*this.height);
    } */
}

var Mark = {
    fullName: 'Mark Smith',
    mass: 55,
    height: 1.68,
    BMI: callBMI,
   /*  callBMI: function() {
        return this.mass / (this.height*this.height);
    } */
}

John.BMI();
Mark.BMI();

console.log("John: ", John);
console.log("Mark: ", Mark);
/* console.log("John BMI: ", John.BMI());
console.log("Mark BMI: ", Mark.BMI()); */

if(John.bmiValue > Mark.bmiValue)
{
    console.log("BMI cua John lon hon BMI cua Mark", "<<", John.bmiValue, " > ", Mark.bmiValue, ">>");
}
else if(John.bmiValue < Mark.bmiValue)
{
    console.log("BMI cua Mark lon hon BMI cua John", "<<", Mark.bmiValue, " > ", John.bmiValue, ">>");
}
else
{
    console.log("BMI cua John bang BMI cua Mark", "<<", Mark.bmiValue, " = ", John.bmiValue, ">>")
}
