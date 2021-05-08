var student = {
    fullName: 'Nguyen Van A',
    year: 1999,
    scores: {
        maths: 9,
        physics: 7.5,
        chemistry: 5
    },
    calAverage: function() {
        //console.log("Run calAverage");
        //console.log(this);
        var maths = this.scores.maths;
        var physics = this.scores.physics;
        var chemistry = this.scores.chemistry;

        return (maths + physics + chemistry)/3;
    }
};

console.log("Student: ", student);
console.log("Name: ", student.fullName);
console.log("Year: ", student.year);
console.log("Scores: ", student.scores);
console.log("Math: ", student.scores.maths);
console.log("Physics: ", student.scores.physics);
console.log("Chemistry: ", student.scores.chemistry);

var avarage = student.calAverage();
console.log("Average: ", avarage);

console.log(" =================================== ");

var student2 = new Object();
student2.fullName = 'Nguyen Van B';
student2.year = 1992;
student2.scores = {
    maths: 8,
    physics: 7,
    chemistry: 5
}
student2.calAverage = student.calAverage;
/* student2.calAverage = function() {
    var maths = this.scores.maths;
    var physics = this.scores.physics;
    var chemistry = this.scores.chemistry;

    return (maths + physics + chemistry)/3;
} */

//console.log("Student2.fullName: ", student2.fullName);
console.log("Student2: ", student2);
console.log("Average: ", student2.calAverage());
console.log("Student2.fullName: ", student2['fullName']);

var objDemo = {
    'full-Name': 'Nguyen Van C',
}

console.log("objDemo: ", objDemo);
console.log("fullName: ", objDemo['full-Name']);
console.log("fullName: ", objDemo.full-Name);