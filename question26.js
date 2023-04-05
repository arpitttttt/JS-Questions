// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

const printPrimes = () => {
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    }
};

printPrimes();
