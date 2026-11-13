class bankAccount {
    #balance;

    constructor(owner, initialBalance){
        this.owner = owner; //not hidden - public
        this.#balance = initialBalance; //hidden - private
    }
    deposit(amount){
        if (amount <= 0){
            console.log("Invalid amount");
            return;
        }
        this.#balance += amount;
        console.log(`Deposited $ ${amount}. New balance is: $ ${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new bankAccount("Fahim", 1000);
acc.deposit(500);
console.log(acc.getBalance());
console.log(acc.owner);