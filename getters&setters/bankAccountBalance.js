//You’re building a simple banking app. You need to make 
//sure that the account balance never goes below 0.
const bankAccount={
    _balance:1000,
    get yourBalance(){
        return `this is your balance: ${this._balance}`;
    },

    set yourBalance(newBalance){
        if(newBalance>=0){
            this._balance= newBalance;
        }else{
            console.log(`Insufficient  funds!`);
        }
    }

}
console.log(bankAccount.yourBalance);
bankAccount.yourBalance=700;
console.log(bankAccount.yourBalance);