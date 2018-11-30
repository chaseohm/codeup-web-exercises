// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2

var reportContents = "Monthly Sales Report";
var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n " +
    "===================================================\nEmployee Number, First Name, Last Name, Sales Units\n***************************************************" +
    "\n\n1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4\n5, Charles Emmerson III, Winchester, 2\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, " +
    "12\n8, Dale, Dalesinger, 1\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";

// var saleNumbers = reportContents.split('3, 5, 4, 2, 8, 12, 1, 50, 1, 23, 67').sort().reverse();
var reportContentsArray = reportContents.split('\n');
// var remove = reportContentsArray.shift();
// var remove = reportContentsArray.shift();
// var remove = reportContentsArray.shift();
// var remove = reportContentsArray.shift();
// var remove = reportContentsArray.shift();
// var remove = reportContentsArray.shift();
// var remove = reportContentsArray.shift();

var employeeNumber = reportContentsArray.slice(7);
console.log(employeeNumber);
// var saleNumber = employeeNumber.s();
// console.log(saleNumber);


var totalUnits = 0;


employeeNumber.forEach(function (employee) {
    var employeeData = employee.split(", ");
    console.log(employeeData);
    totalUnits += parseFloat(employeeData[3]);
})
console.log("Total units sold is " + totalUnits);

function average(input){
    return console.log("The average number of units sold between Salespeople is " + totalUnits / employeeNumber.length);
}

average();






// function sortNumber(a,b) {
//     return a + b;
// }
//
// var unitsSold = employeeNumber.sort(sortNumber).reverse();








console.log("There are " + employeeNumber.length + " employees. ");

var htmlString = "<ul>Units || First Name || Last Name || Employee Number<li>";
htmlString += reportContentsArray.join("</li> -- <li>");
htmlString += "</li></ul>";
document.body.innerHTML += htmlString;
