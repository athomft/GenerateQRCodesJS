const QRCode = require('qrcode');
const ExcelJS = require('exceljs');
const fs = require('fs');
const readline = require('readline');

// Function to generate random 10-digit number
function generateRandom10Digit() {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

// Function to generate QR code
async function generateQRCode(data, filename) {
    try {
        await QRCode.toFile(filename, data, {
            errorCorrectionLevel: 'H',
            width: 250,
            margin: 4,
            color: {
                dark: '#000000',  // black dots
                light: '#FFFFFF'  // white background
            }
        });
        console.log(`Saved as ${filename}`);
    } catch (err) {
        console.error('Failed to generate QR code:', err);
    }
}

// Function to save data to Excel
async function saveToExcel(numbers) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('QR Codes');
    worksheet.columns = [{ header: 'QR Codes', key: 'qrcode' }];

    numbers.forEach(number => {
        worksheet.addRow({ qrcode: number });
    });

    await workbook.xlsx.writeFile('QR_Codes.xlsx');
    console.log('10-digit numbers saved to QR_Codes.xlsx');
}

// Create a readline interface for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async function main() {
    const numbers = [];

    rl.question('Enter the number of QR codes to generate: ', async (answer) => {
        const numQrCodes = parseInt(answer, 10);

        if (isNaN(numQrCodes)) {
            console.log('Please enter a valid number.');
            rl.close();
            return;
        }

        for (let i = 0; i < numQrCodes; i++) {
            const randomData = generateRandom10Digit();
            numbers.push(randomData);
            const filename = `${randomData}.png`;

            await generateQRCode(randomData, filename);
            console.log(`QR code ${i + 1} generated with random 10-digit number:`, randomData);
        }

        await saveToExcel(numbers);
        rl.close();
    });
})();
