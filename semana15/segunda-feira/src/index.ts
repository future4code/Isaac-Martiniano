import { triggerAsyncId } from "async_hooks";

class UserAccount {
    name: string;
    age: number;
    private cpf: string;
    private balance: number = 0;
    private transactions: Transaction[]

    constructor(newName: string, newAge: number, newCpf: string, newBalance: number = 0, newTransactions: Transaction[]){
        this.name = newName
        this.age = newAge
        this.cpf = newCpf
        this.balance = newBalance
        this.transactions = newTransactions
    }
}
