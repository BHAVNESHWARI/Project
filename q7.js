// Import necessary modules
const fs = require("fs");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const os = require("os");
const { Readable } = require("stream");

// Retrieve command-line arguments
const operation = process.argv[2];
const input = process.argv[3];
const additionalInput = process.argv[4];

// Function to encrypt a string using the crypto module
function encryptString(data) {
  const algorithm = "aes-256-cbc";
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");

  console.log("Encrypted String:", encrypted);
  console.log("Key:", key.toString("hex"));
  console.log("IV:", iv.toString("hex"));
}

// Function to generate a random string using UUID
function generateUUID() {
  console.log("Generated UUID:", uuidv4());
}

// Function to read a large file using streams
function readLargeFileWithStream(filePath) {
  const startTime = Date.now();
  const stream = fs.createReadStream(filePath, { encoding: "utf8" });

  stream.on("data", (chunk) => {
    // Process chunk (if needed)
  });

  stream.on("end", () => {
    const endTime = Date.now();
    console.log(`Stream read completed in ${endTime - startTime}ms.`);
  });

  stream.on("error", (err) => {
    console.error("Stream error:", err.message);
  });
}

// Function to read a large file using fs.readFile
function readLargeFileWithFS(filePath) {
  const startTime = Date.now();
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("FS read error:", err.message);
      return;
    }
    const endTime = Date.now();
    console.log(`FS read completed in ${endTime - startTime}ms.`);
  });
}

// Function to print system details using the OS module
function printSystemDetails() {
  console.log("System Details:");
  console.log("Platform:", os.platform());
  console.log("Architecture:", os.arch());
  console.log("CPU Info:", os.cpus());
  console.log("Total Memory:", os.totalmem());
  console.log("Free Memory:", os.freemem());
  console.log("Home Directory:", os.homedir());
  console.log("Uptime:", os.uptime());
}

// Main logic to handle operations
switch (operation) {
  case "encrypt":
    if (!input) {
      console.error("Please provide a string to encrypt.");
    } else {
      encryptString(input);
    }
    break;

  case "uuid":
    generateUUID();
    break;

  case "stream":
    if (!input) {
      console.error("Please specify a file to read using streams.");
    } else {
      readLargeFileWithStream(input);
    }
    break;

  case "fsread":
    if (!input) {
      console.error("Please specify a file to read using fs.readFile.");
    } else {
      readLargeFileWithFS(input);
    }
    break;

  case "os":
    printSystemDetails();
    break;

  default:
    console.error(`Invalid operation '${operation}'.`);
    console.log("Valid operations: encrypt, uuid, stream, fsread, os");
}
