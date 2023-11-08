'use strict';

let deadline = new Date("Dec 31, 2023 19:00:00").getTime();

let now = new Date().getTime();
let t = deadline - now;
let days = Math.floor(t/(1000*60*60*24));
let hours = Math.floor((t%(1000*60*60**24))/(1000*60*60));
let minutes = Math.floor((t%(1000*60*60))/(1000*60));
let seconds = Math.floor((t%(1000*60))/1000);

document.getElementById('demo').innerHTML = days + "d" + hours+ "h "+minutes+"m" + seconds + "s";

if 
(t<0){
  clearInterval(x);
  document.getElementById("demo").innerHTML = "EXPIRED";
}

console.log(days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");

function validateEmails() {
  var email1 = document.getElementById("email").value;
  var email2 = document.getElementById("confirmEmail").value;
  var errorDiv = document.getElementById("emailError");

  if (email1 !== email2) {
    errorDiv.textContent = "Emails do not match.";
  } else {
    errorDiv.textContent = ""; // 
  }
}
