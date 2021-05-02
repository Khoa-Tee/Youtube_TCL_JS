var age = 22;

console.log("age <= 35", age <= 35);
console.log("age >= 35", age >= 35);
console.log("!(age == 35)", !(age == 35));

console.log("age < 35 && age >= 25 ?", age < 35 && age >= 25);
console.log("age > 35 || age < 35 ?", age < 35 || age >= 25);
console.log("!(age > 35 && age >= 25 ?)", !(age < 35 && age >= 25));

var firstName = "Khoa";

if(age < 15)
{
    console.log(firstName + " la thieu nhi");
}
else if(age >=15 && age <= 18)
{
    console.log(firstName + " la thanh nien");
}
else if(age > 18 && age <= 30)
{
    console.log(firstName + " la dan ong");
}
else
{
    console.log(firstName + " la nguoi truong thanh chung chac");
}

var job = "doctor";

switch (job)
{
    case 'designer':
        console.log(firstName + ' is a designer');
        break;
    case 'worker':
        console.log(firstName + ' is a worker');
        break;
    case 'doctor':
        console.log(firstName + ' is a doctor');
        break;
    default:
        console.log(firstName + ' is out of job');
        break;
}

switch (true)
{
    case age < 15:
        console.log(firstName + " la thieu nhi");
        break;
    case age >=15 && age <= 18:
        console.log(firstName + " la thanh nien");
        break;
    case age > 18 && age <= 30:
        console.log(firstName + " la dan ong");
        break;
    default:
        console.log(firstName + " la nguoi truong thanh chung chac");
        break;
}

var height = 0;

if(height || height === 0)
{
    console.log("Height co gia tri ", height);
}
else{
    console.log("Height khong co gia tri ", height);
}

var height2 = '22';

if(height2 === 22)
{
    console.log("Chay vao day ", height2);
}
else
{
    console.log("Chay vao else ", height2);
}