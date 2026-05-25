// getter
// setter


class BankAccout {
    public readonly userId: number;
    public Username: string;
    protected userBalalnce: number;

    constructor(userId: number,Username: string,userBalalnce: number) {
        this.userId = userId;
        this.Username = Username;
        this.userBalalnce = userBalalnce;
    }



    // set the balance
    // addBalance(balance: number){
    //     this.userBalalnce = this.userBalalnce + balance
    // }


    // setter use kore korle 
    set addBalance(amount: number){
        this.userBalalnce = this.userBalalnce + amount ;
    }

    // get korbo

    // getBalance(){
    //     return this.userBalalnce
    // }



    // getter use kore korbo
    get getBalance(){
       return this.userBalalnce
    }
}





const mezbaAccout = new BankAccout(111, "mezva", 20);
// mezbaAccout.addBalance(100) ;
// mezbaAccout.addBalance(60) ;
// console.log(mezbaAccout.getBalance());

mezbaAccout.addBalance = 100;
mezbaAccout.addBalance = 50;
console.log(mezbaAccout.getBalance);

