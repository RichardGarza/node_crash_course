const path = require('path');

// Get Base File Name

console.log(path.basename(__filename));

// Get Directory Name

console.log(path.dirname(__filename));

// File Extension

console.log(path.extname(__filename));

// Create Path Object

console.log(path.parse(__filename))

// Concatenate paths

console.log(path.join(__dirname, 'test', 'hello.html'))