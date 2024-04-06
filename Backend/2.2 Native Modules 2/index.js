const fs = require('fs');

// File path
const filePath = 'message.txt';

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Modify the data (for example, append some text)
    const modifiedData = data + '\nHello from Juha!';

    // Write back to the file
    fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return;
        }
        console.log("File has been modified.");
    });
});