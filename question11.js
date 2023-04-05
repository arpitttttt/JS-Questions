// Get the current date and time
let now = new Date();

// Get the year
let year = now.getFullYear();

// Get the month as a number (0-11)
let month = now.getMonth();

// Get the date
let date = now.getDate();

// Get the day as a number (0-6)
let day = now.getDay();

// Get the hours
let hours = now.getHours();

// Get the minutes
let minutes = now.getMinutes();

// Get the seconds elapsed from January 1, 1970 to now
let secondsElapsed = now.getTime() / 1000;

// Log the results to the console
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds elapsed since January 1, 1970:", secondsElapsed);
