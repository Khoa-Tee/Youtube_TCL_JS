var bills = [124, 48, 268];

function calTip(bill)
{
    var percent;

    if(bill < 50)
    {
        percent = 0.2;
    }
    else if(bill >= 50 && bill <= 200)
    {
        percent = 0.15;
    }
    else
    {
        percent = 0.1;
    }

    return percent*bill;
}

// Tạo thẳng các elements trong mảng Tips và hiển thị ra ở console
var Tips = [
    calTip(bills[0]),
    calTip(bills[1]),
    calTip(bills[2]),
]

console.log("Bills: ", bills);
console.log("Tips of each bill: ", bills, Tips);

// Tạo 1 mảng Tips2 rỗng sau đó tạo từng element đưa vào mảng Tips2 bằng lệnh push
var Tips2 = [];
Tips2.push(calTip(bills[0]));
Tips2.push(calTip(bills[1]));
Tips2.push(calTip(bills[2]));
console.log("Tips of each bill: ", bills, Tips2);

// Tạo 1 mảng Tips3 rỗng sau đó tạo từng element đưa vào mảng Tips3 bằng lệnh Tips3.length
var Tips3 = []; // length = 0
Tips3[Tips3.length] = (calTip(bills[0])); // length = 1 -> index hợp lệ = 0 (vị trí thứ 0)
Tips3[Tips3.length] = (calTip(bills[1]));
Tips3[Tips3.length] = (calTip(bills[2]));
console.log("Tips of each bill: ", bills, Tips3);

var totalBill = [
    Tips[0] + bills[0],
    Tips[1] + bills[1],
    Tips[2] + bills[2],
]

console.log("Total of each bill: ", bills, totalBill);