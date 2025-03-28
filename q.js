function sumOfSquares(k) {
    for (let a = 0; a * a <= k; a++) {
        let b = Math.sqrt(k - a * a);
        if (b === Math.floor(b)) {
            return true;
        }
    }
    return false;
}

// Test Cases
console.log(sumOfSquares(25)); // true (3^2 + 4^2 = 25)
console.log(sumOfSquares(7));  // false (No such pair exists)
console.log(sumOfSquares(10)); // true (1^2 + 3^2 = 10)
console.log(sumOfSquares(50)); // true (5^2 + 5^2 = 50)
