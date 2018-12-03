(function() {
    "use strict";

    console.log('Lets mess with OBJECTS!')

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        // 'firstName': 'Chase ',
        // 'lastName': 'Ohm',
        // 'sayHello': 'Hey there, Ryan!'
    }
    //-------------------------------OR------------------------------------------------
    person.firstName = 'Chase ';
    person.lastName = 'Ohm';
    person.sayHello = 'Hey there, Ryan!';

    console.log("My name is " + person.firstName  +  person.lastName + ". " + person.sayHello);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    console.log("SHOPPERS EXERCISE");


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    function checkout(clients) {
        clients.forEach(function(client){
            var discount = (client.amount >= 200) ? client.amount * 0.12 : 0;
            var total = client.amount - discount;
            console.log(client.name + " spent " + client.amount + ", they will receive a " + discount + " percent discount and will end up paying " + total + ".");
        })
    }
        checkout(shoppers);

    //------------------------------OR------------------------------------------------------

    // shoppers.forEach(function(shopper) {
    //     if (shopper.amount < 200){
    //         console.log(shopper.name + " still owes " + (shopper.amount - 200) );
    //     }
    //     else {
    //         console.log((shopper.amount * .12) - shopper.amount + " is what " + shopper.name + " owes. ");
    //     }
    //
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    console.log("BOOKS EXERCISE");

        var books = [
        {title : 'Where the Red Fern Grows ',
            number : '1st book',
            author:{ firstName : 'Phil ', lastName : 'Roberson '}},

        {title : 'Big Red ',
            number : '2nd book',
            author:{ firstName : 'Dr ', lastName : 'Pepper '}},

        {title : 'Coke ',
            number : '3rd book',
            author:{ firstName : 'Pepsi ', lastName : 'Cola '}},

        {title : 'Cat in The Hat ',
            number : '4th book',
            author:{ firstName : 'Eddn ', lastName : 'Eddy '}},

        {title : 'Passion of the Christ ',
            number : '5th book',
            author:{ firstName : 'The ', lastName : 'Lord '}}

    ];
            // console.log(books);

        // books.forEach(function(book) {
        //     return console.log("The book, " + book.title + "is written by, " + book.author.firstName + book.author.lastName +". It is the " + book.number + " in our list.");


        //---------------------------OR----------------------------------------------------

        books.forEach(function (book, index) {
            console.log('Book #' + (index + 1));
            console.log('Title: ' + book.title);
            console.log('Author: ' + book.author.firstName + '' + book.author.lastName);
            console.log('----');
        });

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


        //----------------------WASNT SURE HOW TO GET THIS TO WORK----------------------------------



        function createBook(title, author){
            var name = author.split(' ');
            return {
                title: title,
                author: {
                    firstName: name[0],
                    lastName: name[1]
                }
            }
    }


            createBook('HP','JK Rowling');



})();
