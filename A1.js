const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Home route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home Page');
  } else if (req.url === '/aboutus') {
    // About Us route
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h3>Welcome to About Page</h3>');
  } else if (req.url === '/contactus') {
    // Contact Us route
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(
      '<a href="https://www.masaischool.com" target="_blank">Contact us at www.masaischool.com</a>'
    );
  } else if (req.url === '/index') {
    // Index route
    fs.readFile('index.js', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading index.js file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else {
    // For any other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Run the server on port 8080
server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
