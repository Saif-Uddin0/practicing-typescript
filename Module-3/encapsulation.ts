// access >> modify


class BankAccout {
    public readonly userId: number;
    public Username: string;
    protected userBalalnce: number;

    constructor(userId: number,Username: string,userBalalnce: number) {
        this.userId = userId;
        this.Username = Username;
        this.userBalalnce = userBalalnce;
    }

    addBalance(balance: number){
        this.userBalalnce = this.userBalalnce + balance
    }
}




class studentAccount extends BankAccout{
 test(){
    this.userBalalnce
 }
}




const mezbaAccout = new BankAccout(111, "mezva", 20);
mezbaAccout.addBalance(100) ;
mezbaAccout.addBalance(20) ;
console.log(mezbaAccout);
