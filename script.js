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
function balChange(){
    balAmount.innerHTML = (`Your balance : ${balance}$`)
}
var timeDisplay = document.getElementById("time");

document.getElementById("test").innerHTML =
      Intl.DateTimeFormat().resolvedOptions().timeZone;

function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: test.innerHTML});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);