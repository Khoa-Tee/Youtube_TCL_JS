/* for (var run = 1; run <= 10; run++)
{
    console.log("Run = ", run);
} */

var run = 1;
for ( ;run <= 10; )
{
    console.log("Run = ", run);
    run = run + 1;
}

console.log("Run sau khi chay xong vong lap = ", run);

var john = ['john', 'smith', 28, true];
console.log("John: ", john);

for (run = 0; run < john.length; run++)
{
    console.log("Phan tu thu [" + run + "] = ", john[run]);

}

function calAverage() {
    this.average = (this.maths + this.physics)/2;
    return this.average;
}

var arrStudents = [
    {
        fullName: 'Nguyen Van A',
        maths: 9,
        physics: 8,
    }, {
        fullName: 'Nguyen Van B',
        maths: 8,
        physics: 6,
    }, {
        fullName: 'Nguyen Van C',
        maths: 7,
        physics: 6,
    }, {
        fullName: 'Nguyen Van D',
        maths: 8,
        physics: 5,
    }
]   

for (i = 0; i < arrStudents.length; i++)
{
    arrStudents[i].calAverage = calAverage;
    arrStudents[i].calAverage();
}

console.log("arrStudents = ", arrStudents);

var calAverage2 = function() {
    var total = 0;
    var totalScores = 0;
    for (key in this.scores) {
        total = total + 1;
        totalScores = totalScores + this.scores[key];
        //console.log("Score " + key, " = ", this.scores[key]);
    }
    return totalScores / total;
    //console.log("Total = ", total);
    //console.log("Total scores = ", totalScores);
}

var studentA = {
    fullName: 'Nguyen Van A',
    year: 1992,
    scores: {
        maths: 9,
        physics: 8,
        chemistry: 7,
    },
    calAverage: calAverage2
}

var studentB = {
    fullName: 'Nguyen Van B',
    year: 1992,
    scores: {
        maths: 8,
        physics: 7,
        chemistry: 6,
        english: 5,
    },
    calAverage: calAverage2
}

console.log("StudentA Average Score = ", studentA.calAverage());
console.log("StudentB Average Score = ", studentB.calAverage());

var i = 1;
while(i <= -1)
{
    console.log("index = ", i);
    i++;
}

var i = 1;
do
{
    console.log("index = ", i);
    i++;
} while(i <= -1);
