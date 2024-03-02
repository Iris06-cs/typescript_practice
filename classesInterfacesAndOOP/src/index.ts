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
