// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let driving=()=>{
    let age=parseInt(prompt("Enter your age: "))

    if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  let Wait = 18 - age;
  console.log("Sorry, you are not old enough to drive. Please wait " + Wait + " more years.");
}

}

driving()


