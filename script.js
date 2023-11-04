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