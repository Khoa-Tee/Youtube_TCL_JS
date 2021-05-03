var arrStudents = [
    'Nguyen Van A',
    'Nguyen Van B',
    'Nguyen Van C',
];

console.log("arrStudents = ", arrStudents);
console.log("arrStudents Length = ", arrStudents.length);
console.log("arrStudent[0] = ", arrStudents[0]);
console.log("arrStudent[length - 1] = ", arrStudents[arrStudents.length - 1]);

var arrStudents2 = new Array ('NV A', 'NV B', 'NV C', 'NV D');

console.log("arrStudents2 = ", arrStudents2);
console.log("arrStudents2[2] = ", arrStudents2[2]);
console.log("arrStudents2[length - 1] = ", arrStudents2[arrStudents2.length - 1]);

// C, C++, Java -> Array chỉ lưu trữ được 1 kiểu dữ liệu duy nhất
// Trong Javascript, bản chất của Array là 1 Object -> lưu trữ được nhiều kiểu dữ liệu

console.log(typeof arrStudents);

var arrDemo = [
    'Nguyen Van A',
    22,
    true,
    [26, 7, 1997],
]

console.log('arrDemo = ', arrDemo);
console.log('arrDemo = ', arrDemo[3][0]);
console.log('arrDemo[2] = ', arrDemo[2]);