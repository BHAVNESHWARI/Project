const fs = require("fs");
const path = require("path");

// Retrieve command-line arguments
const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

// Function to read a file
function readFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file '${filePath}':`, err.message);
      return;
    }
    console.log(`Contents of '${filePath}':\n${data}`);
  });
}

// Function to delete a file
function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file '${filePath}':`, err.message);
      return;
    }
    console.log(`File '${filePath}' deleted.`);
  });
}

// Function to create a file
function createFile(filePath) {
  fs.writeFile(filePath, "", (err) => {
    if (err) {
      console.error(`Error creating file '${filePath}':`, err.message);
      return;
    }
    console.log(`File '${filePath}' created.`);
  });
}

// Function to append content to a file
function appendToFile(filePath, content) {
  fs.appendFile(filePath, `\n${content}`, (err) => {
    if (err) {
      console.error(`Error appending to file '${filePath}':`, err.message);
      return;
    }
    console.log(`Content appended to the file '${filePath}'.`);
  });
}

// Function to rename a file
function renameFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(`Error renaming file '${oldPath}' to '${newPath}':`, err.message);
      return;
    }
    console.log(`File '${oldPath}' renamed to '${newPath}'.`);
  });
}

// Function to list files in a directory
function listDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error listing directory '${directoryPath}':`, err.message);
      return;
    }
    console.log(`Contents of directory '${directoryPath}':`);
    files.forEach((file) => console.log(file));
  });
}

// Main logic to handle operations
switch (operation) {
  case "read":
    if (!file) {
      console.error("Please specify a file to read.");
    } else {
      readFile(file);
    }
    break;

  case "delete":
    if (!file) {
      console.error("Please specify a file to delete.");
    } else {
      deleteFile(file);
    }
    break;

  case "create":
    if (!file) {
      console.error("Please specify a file to create.");
    } else {
      createFile(file);
    }
    break;

  case "append":
    if (!file || !content) {
      console.error("Please specify both content and a file to append to.");
    } else {
      appendToFile(file, content);
    }
    break;

  case "rename":
    if (!file || !content) {
      console.error("Please specify both the old file name and the new file name.");
    } else {
      renameFile(file, content);
    }
    break;

  case "list":
    if (!file) {
      console.error("Please specify a directory to list.");
    } else {
      listDirectory(file);
    }
    break;

  default:
    console.error(`Invalid operation '${operation}'.`);
    console.log("Valid operations: read, delete, create, append, rename, list");
}
