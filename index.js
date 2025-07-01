const fs = require('fs');
const path = require('path');

function runFunction() {
    const message = `Hello, Node.js! - ${new Date().toISOString()}\n`;

    console.log("Hello, Node.js!"); // Still logs to terminal
    fs.appendFileSync(path.join(__dirname, 'run.log'), message);
}

module.exports = {
    runFunction
};