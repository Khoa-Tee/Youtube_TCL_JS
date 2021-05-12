var arrDemo = [
    'John',
    'Smith',
    28,
    'John',
    true,
];

console.log("arrDemo = ", arrDemo);
console.log("push(123, 789) = ", arrDemo.push(123, 789));
console.log("arrDemo = ", arrDemo);
console.log("unshift(456, 678) = ", arrDemo.unshift(456, 678));
console.log("arrDemo = ", arrDemo);
console.log("pop() = ", arrDemo.pop());
console.log("arrDemo = ", arrDemo);
console.log("shift() = ", arrDemo.shift());
console.log("arrDemo = ", arrDemo);
console.log("arrDemo.indexOf('John') = ", arrDemo.indexOf('John')); 
// arr.indexOf(' ') => Tìm vị trí xuất hiện đầu tiên của 1 phần tử => Xác định xem phần tử cần tìm có tồn tại trong Array hay không 
// Nếu tồn tại => trả về index xuất hiện đầu tiên của phần tử
// Nếu không tồn tại => trả về -1
console.log("arrDemo.indexOf('john') = ", arrDemo.indexOf('john'));
console.log("arrDemo = ", arrDemo);
console.log("arrDemo.lastIndexOf('John') = ", arrDemo.lastIndexOf('John'));
console.log("arrDemo = ", arrDemo);
// Nếu arr.indexOf(' ') và arr.lastIndexOf(' ') cùng trả về index giống nhau => Giá trị đó là duy nhất trong mảng
console.log("arrDemo.indexOf(28) = ", arrDemo.indexOf(28));
console.log("arrDemo.lastIndexOf(28) = ", arrDemo.lastIndexOf(28));
console.log("arrDemo = ", arrDemo);

if (arrDemo.indexOf(28) === arrDemo.lastIndexOf(28))
{
    console.log("Gia tri 28 la duy nhat trong mang");
}
else
{
    console.log("Gia tri 28 xuat hien it nhat 02 lan trong mang");
}

if (arrDemo.indexOf(true) == -1)
{
    console.log("John isn't married");
}
else
{
    console.log("John is married");
}

console.log("arrDemo = ", arrDemo);
arrDemo[7] = 'test';
console.log("arrDemo = ", arrDemo);
arrDemo[arrDemo.length] = 'khoa';
console.log("arrDemo = ", arrDemo);
