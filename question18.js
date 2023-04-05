// Write a program which tells the number of days in a month, now consider leap year.
const getDaysInMonth = (month, year) => {
    if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    } else if ([4, 6, 9, 11].includes(month)) {
      return 30;
    } else {
      return 31;
    }
  };
  
  const month = parseInt(prompt("Enter the month (1-12):"));
  const year = parseInt(prompt("Enter the year:"));
  
  const daysInMonth = getDaysInMonth(month, year);
  console.log(`There are ${daysInMonth} days in ${month}/${year}.`);
  
