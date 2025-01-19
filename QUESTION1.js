const http = require("http");
const fs = require("fs");

const PORT = 3000;
const DB_FILE = "db.json";

// Utility function to read and parse the database
const readDatabase = () => {
  try {
    const data = fs.readFileSync(DB_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Utility function to write to the database
const writeDatabase = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// Create the HTTP server
const server = http.createServer((req, res) => {
  const urlParts = req.url.split("/");
  const method = req.method;

  if (method === "POST" && urlParts[1] === "create") {
    // Create a new user
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const { name, email, password, phone } = JSON.parse(body);
      const users = readDatabase();
      const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email,
        password,
        phone,
      };
      users.push(newUser);
      writeDatabase(users);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
      }));
    });
  } else if (method === "GET" && urlParts[1] === "read") {
    // Read all users
    const users = readDatabase();
    const response = users.map(({ id, name, email, phone }) => ({ id, name, email, phone }));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  } else if (method === "PUT" && urlParts[1] === "update" && urlParts[2]) {
    // Update a user by ID
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const id = parseInt(urlParts[2]);
      const { name, email, phone } = JSON.parse(body);
      const users = readDatabase();
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "User not found" }));
      } else {
        users[userIndex] = { ...users[userIndex], name, email, phone };
        writeDatabase(users);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users[userIndex]));
      }
    });
  } else if (method === "DELETE" && urlParts[1] === "delete" && urlParts[2]) {
    // Delete a user by ID
    const id = parseInt(urlParts[2]);
    const users = readDatabase();
    const newUsers = users.filter((user) => user.id !== id);
    if (newUsers.length === users.length) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "User not found" }));
    } else {
      writeDatabase(newUsers);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Record deleted successfully" }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
