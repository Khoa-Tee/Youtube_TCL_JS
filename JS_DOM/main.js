var demoId = document.getElementById("demo");
console.log(demoId);
var demoClass = document.getElementsByClassName("demo");
console.log(demoClass);
console.log(demoClass[0]);
console.log(demoClass[1]);
console.log(demoClass[2]);
console.log(demoClass[3]);
console.log("demoClass Length = ", demoClass.length);

var arrNumber = [1, 2, 3, 4];
console.log("arrNumber: ", arrNumber);
arrNumber.push(5);
console.log("arrNumber After Push: ", arrNumber);

for(var i = 0; i < demoClass.length; i++)
{
    console.log("Phan tu thu " + i + " la: ", demoClass[i]);
}

console.log(demoClass);
var arrDemoClass = Array.from(demoClass);
arrDemoClass.push(123);
console.log(arrDemoClass);

var div = document.getElementsByTagName("div");
console.log("div = ", div);

var h1 = document.getElementsByTagName("h1");
console.log("h1 = ", h1);