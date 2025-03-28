function isHappy(n) {
    let seen = new Set();
    
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = [...n.toString()].reduce((sum, digit) => sum + digit * digit, 0);
    }
    
    return n === 1;
}

// Example usage:
console.log(isHappy(19)); // Output: true
console.log(isHappy(7));  // Output: true
console.log(isHappy(4));  // Output: false
