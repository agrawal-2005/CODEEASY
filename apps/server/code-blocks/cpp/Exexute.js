import { exec } from 'child_process';
import fs from 'fs';

async function runCPPCode(sourceFile, inputFile, id) {
    return new Promise(async (resolve, reject) => {
        const file = sourceFile.split(".")[0];
        try {
            // Compile the C++ code
            exec(`g++ -o ${file}.exe ${sourceFile}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Compilation Error: ${error.message}`);
                    reject(error);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    reject(stderr);
                    return;
                }
                // Execute the compiled executable with input redirection
                // use cat instead of type for ubuntu
                exec(`type ${inputFile} | ${file}.exe`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Runtime Error: ${error.message}`);
                        reject(error);
                        return;
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`);
                        reject(stderr);
                        return;
                    }
                    resolve(stdout);
                });

                // Clean up the compiled executable
                fs.unlink(`${file}.exe`, (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                    }
                });
            });
        } catch (err) {
            reject(err);
        }
    });
}

// Export the runCPPCode function
export default runCPPCode;
