function deposit(amount: any){
    return {
        type: "deposite",
        payload: amount
    }
}

function withdraw(amount: any){
    return {
        type: "withdraw",
        payload: amount
    }
}

export {deposit, withdraw};