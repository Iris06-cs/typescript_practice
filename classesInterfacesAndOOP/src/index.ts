class Account {
  // different from JavaScript, need to define properties
  //   readonly id: number; //cannot change readonly property
  //   owner: string;
  //   private _balance: number;
  nickname?: string; //optional property

  //   constructor(id: number, owner: string, balance: number) {
  //     this.id = id;
  //     this.owner = owner;
  //     this._balance = balance;
  //   }
  // better way to define constructor,parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    }
    this._balance += amount;
  }
  withdraw(amount: number): void {
    if (amount > this._balance) {
      throw new Error("Invalid Amount");
    }
    this._balance -= amount;
  }
  //   getBalance(): number {
  //     return this._balance;
  //   }
  // use getter/setter
  get balance(): number {
    return this._balance;
  }
}
// create object
let account = new Account(1, "Iris", 0);
account.deposit(100);
// console.log(account.getBalance());
console.log(account.balance);
console.log(account); //object
console.log(account instanceof Account); //true

// TypeScript access modifiers public private protected

// using index signatures to create properties dynamically
class SeatAssignment {
  // seat number A1 A2...
  // name
  [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = "Iris";
seats.A2 = "Jason";
