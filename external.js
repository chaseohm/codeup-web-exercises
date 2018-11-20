"use strict";

console.log('Hello from inline JavaScript!');

alert('Welcome to MY Website!');

var userInput = prompt('What is your favorite color?');
console.log( userInput );

alert(userInput + ' is my favorite color too!');

var LM = prompt("How many days have you had Little Mermaid?");
var BB = prompt("How many days have you had Brother Bear?");
var H = prompt("How many days have you had Hercules?");
var DailyRentalPrice = prompt("What is the daily fee?");

    var TotalMoviePrice = (parseFloat(LM) + parseFloat(BB) + parseFloat(H) * parseFloat(DailyRentalPrice));
        alert("Your total fee is " + TotalMoviePrice)

var Google = prompt("How many days have you worked at Google this week?");
        var gpay = prompt("What is your daily pay here?");
var Amazon = prompt("How many days have you worked at Amazon this week?");
        var apay = prompt("What is your daily pay here?");
var Facebook = prompt("And how many days have you worked at Facebook this week?");
        var fpay = prompt("And what is your daily pay at Facebook?");

            var fullweekpay = parseFloat(Google) * parseFloat(gpay) + parseFloat(Amazon) * parseFloat(apay) + parseFloat(Facebook) * parseFloat(fpay);
            alert("You made " + fullweekpay )
