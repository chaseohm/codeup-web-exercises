(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */


    var names = ["chase","bob","phil","rex","kit"];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */


    console.log("The number of names in the array is " + names.length);


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */


    console.log('The first name is: ' + names[0]);


    console.log('The second name is: ' + names[1]);


    console.log('The third name is: ' + names[2]);


    console.log('The fourth name is: ' + names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */


    for (var name = 0; name < names.length; name++){
    console.log('The name at index ' + name + ' is: ' + names[name]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */


    names.forEach(function(name){
        console.log('Here is a name ' + name + '.')
    })


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


     function first(name) {
         return name[0];
     }
     function second(name) {
         return name[1];
     }
     function fifth(name) {
         return name[4];
     }
     console.log('The first name in the array is ' + first(names));
     console.log('The second name in the array is ' + second(names));
     console.log('The fifth name in the array is ' + fifth(names));


})();

// ---------------------------------------------------BONUS WORK-----------------------------------------------------------


function oneHundred(){
    return Array.apply(null, {length: 101}).map(Number.call, Number)
}
    console.log(Array);



// for (var i = 1; i < 101; i++){
//     console.log(i);
// }



// ---------------------------------------------------BONUS WORK-----------------------------------------------------------


var cars = ["corvette", "mustang", "lamborghini", "porsche"];
function reverse() {
    cars.reverse();
}


// ---------------------------------------------------BONUS WORK-----------------------------------------------------------


var sum = [1, 2, 3].reduce(sumAll, 0);

function sumAll(a, b) {
    return a + b;
}

console.log(sum);

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log( sumTo(100) );


// ---------------------------------------------------BONUS WORK-----------------------------------------------------------

function multiplyAll(numbers) {
    var product = 1;
    numbers.forEach(function (number) {
        product *=number;
    })
}






//
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
//
// console.log( sumTo(100) );