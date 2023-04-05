// Write a program which tells the number of days in a month.

const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const month = parseInt(prompt("Enter the month (1-12):"));
const year = parseInt(prompt("Enter the year:"));

const daysInMonth = getDaysInMonth(month, year);
const monthName = monthNames[month - 1];

console.log(`There are ${daysInMonth} days in ${monthName} ${year}.`);
