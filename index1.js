// Step 1: Create an array with five tasks
let tasks = ["Buy groceries", "Finish report", "Call the bank", "Reply to emails", "Clean the house"];

// Step 2: Remove the first task (shift operation)
for (let i = 0; i < tasks.length - 1; i++) {
    tasks[i] = tasks[i + 1];
}
tasks.length--; // Reduce array length manually

// Step 3: Add two high-priority tasks to the beginning (unshift operation)
tasks.length += 2; // Increase array size manually
for (let i = tasks.length - 1; i >= 2; i--) {
    tasks[i] = tasks[i - 2]; // Shift elements to the right
}
tasks[0] = "Urgent Meeting";
tasks[1] = "Submit assignment";

// Step 4: Replace the last task in the list with a new task
tasks[tasks.length - 1] = "Prepare presentation";

// Step 5: Log the updated task list
console.log("Updated Task List:", tasks);
