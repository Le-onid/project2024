let deposit = 0
let balance = 0
function balanceprompt(){
    deposit = Number(prompt("Ievadiet depozīta summu :"))
    if(deposit>0){
        alert(`Jūsu bilancei pievienots ${deposit}$.`);
        balance = balance + deposit
    }
    else{
        alert("Ievadiet derīgu summu.")
    }
}
////////
function balChange(){
    balAmount.innerHTML = (`Jūsu bilance : ${balance}$`)
}
////////
let mybet = 0
function bet(){
mybet = Number(prompt("Ievadiet savu likmi :"))
if(mybet>0){
    alert(`Jūs esat iestatījis likmi uz ${mybet}$.`)
}
else{
    alert("Ievadiet derīgu likmi.")
}
}
////////
function betChange(){
if(mybet>0){
    betAmount.innerHTML = (`Jūsu likme : ${mybet}$`)
}
}
////////
let lotto = 0
function spin(){
    if(balance>=mybet){
    slot.innerHTML = Math.floor((Math.random() * 888) + 111)
    lotto = slot.innerHTML
    if(lotto[0] === lotto[1] && lotto[1] === lotto[2]){
        balance = balance + mybet * 20
        balAmount.innerHTML = (`Jūsu bilance : ${balance}$`)
    }
    if(lotto[0] === lotto[1] || lotto[1] === lotto[2]){
        balance = balance + mybet * 3
        balAmount.innerHTML = (`Jūsu bilance : ${balance}$`)
    }
    else{
        balance = balance - mybet
        balAmount.innerHTML = (`Jūsu bilance : ${balance}$`)
    }
}
}
////////
function thename(){
let named = document.getElementById("username").value
localStorage.setItem("username", named)
}

function nameapply() {
    let storedusername = localStorage.getItem("username");
    if (storedusername) {
        document.getElementById("displaytext").innerHTML = `👤 ${storedusername}`
    } else {
        document.getElementById("displaytext").innerHTML = `👤 Viesis`
    }
}
////////
const quotes = ["Palicis mazliet!","Vēl viens spins!","Bagātība ir aiz durvīm!","Mašīnas. Jahtas. Meitenes. Nauda.","Beidz gaidīt, dari!"]
let index = Math.floor((Math.random() * 5) + 0)
motivation.innerHTML = quotes[index]
////////
let timeDisplay = document.getElementById("time");

document.getElementById("test").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;