import { exec } from 'child_process';
import fs from 'fs';

// Function to run Java code from a source file
async function runJavaCode(sourceFile, id) {
    return new Promise((resolve, reject) => {
        const file = sourceFile.split(".")[0];
        try {
            exec(`javac ${sourceFile}`, (error, stdout, stderr) => {
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
                exec(`java ${file}`, (error, stdout, stderr) => {
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
                })                   
            });
        } catch (err) {
            reject(err);
        }
    });
}

// Export the runJavaCode function
export default runJavaCode;
