let deposit = 0
let balance = 0
function balanceprompt(){
    deposit = Number(prompt("Enter your deposit amount :"))
    if(deposit>0){
        alert(`You have deposited ${deposit}$ to your balance.`);
        balance = balance + deposit
    }
    else{
        alert("Input a valid amount.")
    }
}
console.log(balance)