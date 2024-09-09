# GenerateQRCodesJS

# QR Code Generator

This project generates QR codes for random 10-digit numbers and saves them to image files. It also saves the generated numbers to an Excel spreadsheet.

## Requirements

- Node.js (>= 14.x)
- npm (Node Package Manager)
- `qrcode` library
- `exceljs` library

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/GenerateQRCodesJS.git
   cd GenerateQRCodesJS

2. **Install the required dependencies:**

    ```bash
    npm install 

## Usage

1. **Run the script:**

    ```bash
    npm install
   
2. **Input the number of QR codes you want to generate:**

    The script will prompt you to enter the number of QR codes to generate. Enter a valid number and press Enter.

    ```bash
    Enter the number of QR codes to generate: 10

3. **Check the generated QR codes and Excel file:**
    - QR code images will be saved as random10digit.png files in the project directory. 
    - An Excel file named QR_Codes.xlsx will be created, listing all the generated 10-digit numbers.

## Script Overview

- Dependencies
    - qrcode: Generates QR code images. 
    - exceljs: Creates and writes to Excel files. 
    - fs: File system module for file operations (included with Node.js). 
    - readline: Provides an interface for reading input from the terminal (included with Node.js).
- Functions:
    - generateRandom10Digit(): Generates a random 10-digit number. 
    - generateQRCode(data, filename): Generates a QR code for the provided data and saves it to a file. 
    - saveToExcel(numbers): Saves the list of generated numbers to an Excel file.

## Example

Running the script and entering 5 will generate 5 QR codes with random 10-digit numbers and save them as PNG files. Additionally, an Excel file named QR_Codes.xlsx will be created with the numbers.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.


### Explanation:

- **Project Overview:** Describes what the script does.
- **Requirements:** Lists the software and libraries needed.
- **Installation:** Provides instructions to clone the repo and install dependencies.
- **Usage:** Guides users on how to run the script and what to expect.
- **Script Overview:** Breaks down the functions and their purposes.
- **Example:** Provides an example of what happens when you run the script.
- **License & Contributing:** Includes standard sections for licensing and contributions.

Feel free to modify any sections according to your preferences or specific project details!