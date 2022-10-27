class bankAccount {
    private name: string;
    private accNo: string;
    private type: string;
    private balance: number;

    constructor() {
        this.balance = 0;
    }

    public initialize(name: string, accNo: string, type: string, balance: number): void {
        this.name = name;
        this.accNo = accNo;
        this.type = type;
        this.balance = balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log("Amount deposited : " + amount);
        console.log("New Balance : " + this.balance);
    }

    public withdraw(amount: number): void {
        if (this.balance - amount < 0) {
            console.log("Insufficient balance...");
        }
        else {
            this.balance -= amount;
            console.log(amount + " withdrawn successfully...");
            console.log("New Balance : " + this.balance);
        }
    }

    public details(): void {
        console.log("Name : " + this.name);
        console.log("Account Number : " + this.accNo);
        console.log("Type : " + this.type);
        console.log("Balance : " + this.balance);
    }
}

let acc1: bankAccount = new bankAccount();
acc1.initialize("Sunny", "12165271281", "Savings", 1000);
acc1.deposit(500);
acc1.withdraw(1000);
acc1.withdraw(1000);
acc1.details();