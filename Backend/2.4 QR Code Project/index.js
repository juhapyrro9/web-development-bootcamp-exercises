/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// Prompt the user for the URL
inquirer.prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Enter the URL:'
    }
]).then((answers) => {
    const url = answers.url;

    // Generate QR code image
    const qrImage = qr.image(url, { type: 'png' });

    // Save the image to a file
    qrImage.pipe(fs.createWriteStream('qr_code.png'));
    console.log('QR code image generated successfully.');

    // --------

    // Text content to be saved
    const textContent = url;

    // File path
    const filePath = 'URL2.txt';

    // Write text content to the file
    fs.writeFile(filePath, textContent, 'utf8', (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return;
        }
        console.log("Text content has been saved to file.");
    });



}).catch((error) => {
    console.error('Error occurred:', error);
});