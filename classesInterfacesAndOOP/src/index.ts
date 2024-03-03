class Account {
  // different from JavaScript, need to define properties
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    }
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Invalid Amount");
    }
    this.balance -= amount;
  }
}
// create object
let account = new Account(1, "Iris", 0);
account.deposit(100);
console.log(account.balance);
console.log(account); //object
console.log(account instanceof Account); //true
