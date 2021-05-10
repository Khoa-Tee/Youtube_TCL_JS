function randomArray(n, max) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        var num = Math.random() * max;
        num = Math.ceil(num);
        arr.push(num);
    }
    return arr;
}

/* var bills = randomArray(3, 500);
console.log("Bills = ", bills); */

var john = {
    firstName: 'John',
    lastName: 'Smith',
    bills: randomArray(10, 500),
    calTips: function () {
        this.tips = [];
        this.totalValues = [];
        var length = this.bills.length;
        console.log("length = ", length);

        for (var i = 0; i < length; i++) {
            var percent;
            var bill = this.bills[i];
            if (bill < 50) {
                percent = 0.2;
            }
            else if (bill >= 50 && bill <= 200) {
                percent = 0.15;
            }
            else {
                percent = 0.1;
            }
            this.tips[i] = bill*percent;
            this.totalValues[i] = this.tips[i] + this.bills[i];
        }
    }
}

john.calTips();
console.log("john = ", john);