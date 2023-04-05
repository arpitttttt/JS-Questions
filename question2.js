// Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

var firstname="Arpit",
lastname="Singh",
Maritalstatus="Unmarried",
Country="India",
Age=21;

console.log(firstname,lastname,Maritalstatus,Country,Age)

function myInfo(fname, lname, country, age, marital) {
    return `My name is ${fname} ${lname}. ${country} is my country . My age is ${age} and I'm ${marital}`; 
}
console.log(myInfo("Arpit", "Singh", "India", 21, "Unmarried"));