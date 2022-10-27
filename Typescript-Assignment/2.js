var bankAccount = /** @class */ (function () {
    function bankAccount() {
        this.balance = 0;
    }
    bankAccount.prototype.initialize = function (name, accNo, type, balance) {
        this.name = name;
        this.accNo = accNo;
        this.type = type;
        this.balance = balance;
    };
    bankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Amount deposited : " + amount);
        console.log("New Balance : " + this.balance);
    };
    bankAccount.prototype.withdraw = function (amount) {
        if (this.balance - amount < 0) {
            console.log("Insufficient balance...");
        }
        else {
            this.balance -= amount;
            console.log(amount + " withdrawn successfully...");
            console.log("New Balance : " + this.balance);
        }
    };
    bankAccount.prototype.details = function () {
        console.log("Name : " + this.name);
        console.log("Account Number : " + this.accNo);
        console.log("Type : " + this.type);
        console.log("Balance : " + this.balance);
    };
    return bankAccount;
}());
var acc1 = new bankAccount();
acc1.initialize("Sunny", "12165271281", "Savings", 1000);
acc1.deposit(500);
acc1.withdraw(1000);
acc1.withdraw(1000);
acc1.details();
