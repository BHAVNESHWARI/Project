function getUserAccessMessage(user) {
    return user.role === "admin" 
        ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked") 
        : user.role === "user" 
        ? (user.active ? "User Access Granted!" : "User Access Revoked") 
        : "Access Denied";
}

// Example Test Cases
let user1 = { name: "Alice", role: "admin", active: false };
console.log(getUserAccessMessage(user1)); 

let user2 = { name: "Bob", role: "user", active: true };
console.log(getUserAccessMessage(user2)); // Output: "User Access Granted!"

let user3 = { name: "Charlie", role: "guest", active: true };
console.log(getUserAccessMessage(user3)); // Output: "Access Denied"
