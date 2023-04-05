// Write a program to check that the number given by the user is a prime number or not.

let primenum=(num)=>{

    if (num<=1){
        return "NOT A PRIME"
    }


    for(let i=2; i<num; i++){
        if(num%i===0){
        return "NOT A PRIME"
    }
    }
    return "PRIME NUMBER"
}

console.log(primenum(13))
console.log(primenum(10))

