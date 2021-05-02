var yearJohn = 0;
/* --------------- Cách 01 --------------- */
function tinhTuoi(year)
{
    return 2019 - year;
}

function thayDoiNamSinh()
{
    yearJohn = 1990;
}

thayDoiNamSinh();
var age = tinhTuoi(yearJohn);
console.log("John's age: ", age);

/* --------------- Cách 02 --------------- */

var yearMark = 0;

var tinhTuoi2 = function(year)
{
    return 2019 - year;
}

var thayDoiNamSinh2 = function(year)
{
    yearMark = 1990;
}

thayDoiNamSinh2();
var age2 = tinhTuoi2(yearMark);
console.log("Mark's age: ", age2);

/* --------------- Cách 03 --------------- */

var yearMary = 0;

var tinhTuoi3 = (year) => 
{
    return 2019 - year;
}

var thayDoiNamSinh3 = () =>
{
    yearMary = 1990;
}

thayDoiNamSinh3();
var age3 = tinhTuoi3(yearMary);
console.log("Mary's age: ", age3);

/* ------------------------------ */

function printContent(firstName, job)
{
    switch (job)
    {
        case 'teacher':
            console.log(firstName, " is a teacher");
            break;
        case 'designer':
            console.log(firstName, " is a designer");
            break;
        default:
            console.log(firstName, " is out of job !!");
            break;
    }
}

printContent('John', 'teacher');
printContent('John', 'worker');
printContent('John', 'designer');