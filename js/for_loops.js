

// -----------------------------------------------MULTIPLICATION TABLE--------------------------------------------------------


function showMultiplicationTable(input, i){
    console.log(input + " x " + i + " = " + input * i )
}
var num = prompt("Enter Number", "0") //prompt user to enter the number

var num = parseInt(num); //parse the num to number



for(var i=1;i<11;i++) {
    showMultiplicationTable(num, i)
}


// -----------------------------------------------RANDOM NUMBER----------------------------------------------------------------


var randomNumber;

for(var i=0; i<10; i++){
    randomNumber =  ((Math.random() * 180) + 20).toFixed();
    console.log(randomNumber);
        if(randomNumber % 2 == 0){
            console.log(randomNumber + " Number is even! ")
        }
        else {
            console.log(randomNumber + " Number is odd! ")
        }
}


// -----------------------------------------------PYRAMID---------------------------------------------------------------------


function createHalfPyramid (height) {

    for (var i = 1; i <= height; i++) {
        var row = '';

        for (var j = 1; j <= i; j++) {
            row += i;
        }


        console.log(row);
    }
}

createHalfPyramid(9);


// -----------------------------------------------COUNTDOWN-------------------------------------------------------------------


for (var i = 100; i> 0; i-=5){
    console.log(i);
}


// -----------------------------------------------DONE------------------------------------------------------------------------