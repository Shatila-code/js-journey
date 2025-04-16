class BankAccount {
    constructor(ownerName, initialBalance) {// O(1)

        this.ownerName = ownerName;                               
        this.balance = initialBalance;                             
        this.history = [];                                         
        this.history.push(`Account created with $${initialBalance}`); 
    }

    deposit(amount) { //0(1)

        if (amount <= 0) {      

            console.log("Amount must be greater than zero.");      
            this.history.push(`Deposit failed: $${amount} not valid`); 
            
        } else {

            this.balance += amount;                                
            this.history.push(`Deposited $${amount}`);      

        }
    }

    withdraw(amount) { //O(1)

        if (amount <= 0 || amount > this.balance) {     

            console.log("Withdrawal amount invalid or exceeds balance."); 

            this.history.push(`Withdraw failed: $${amount}`);    

        } else {

            this.balance -= amount;                                
            this.history.push(`Withdrew $${amount}`);           
        }
    }

    transferTo(anotherAccount, amount) { //0(1)

        if (amount <= 0 || amount > this.balance) {               
            console.log("Transfer not possible: check amount or balance."); 

            this.history.push(`Transfer failed: $${amount} to ${anotherAccount.ownerName}`); 

        } else {

            this.balance -= amount;                               
            anotherAccount.balance += amount;                     
            this.history.push(`Sent $${amount} to ${anotherAccount.ownerName}`); 

        }
    }

    getSummary() { //0(1)
        console.log(`${this.ownerName} has $${this.balance} in the account.`); 
    }

    printHistory() {//O(1)

        console.log(`Transaction log for ${this.ownerName}:`);     
        this.history.forEach((entry) => {                          
            console.log(`-> ${entry}`);     

        });
    }
}


const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300);

acc1.deposit(200);
acc1.withdraw(100);
acc1.transferTo(acc2, 250);

acc1.getSummary();
acc2.getSummary();

acc1.printHistory();

// constant time complexity so it's O(1)