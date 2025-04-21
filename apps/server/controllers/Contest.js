import { createPythonWorker } from '../Code-blocks/python/server.js';
import { createCppWorker } from '../Code-blocks/cpp/server.js';
import submissionModel from '../models/submission.js'
import fs from 'fs';
async function fileToBase64(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            const base64Data = data.toString('base64');
            resolve(base64Data);
        });
    });
}
// let filePath1="test1.cpp";
// const file1content = await fileToBase64(filePath1);

// Create a new document and save it to the database

// createCppWorker(1,"test1.cpp","input.txt");
// async function writeToFile(content, filePath) {
//     try {
//         // console.log(filePath,content)
//         // console.log(content)
//         await fs.promises.writeFile(filePath, content);
//         console.log(`File ${filePath} written successfully.`);
//     } catch (err) {
//         console.error(`Error writing file ${filePath}: ${err.message}`);
//         throw err;
//     }
// }

// async function deleteFile(filePath) {
//     return new Promise((resolve, reject) => {
//         fs.unlink(filePath, (err) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve();
//         });
//     });
// }

export async function runCode(submission_id, sourcefile, inputfile) {
    try {
        // const filePath1 = `${submission_id}.cpp`;
        // await writeToFile(sourcefile, filePath1);
        
        // const filePath2 = `${submission_id}.txt`;
        // await writeToFile(inputfile, filePath2);
        
        // submission_id = JSON.stringify(submission_id);
        
        // Call createCppWorker function
        createCppWorker(submission_id, sourcefile, inputfile);
        
        // Read file content as base64
        // let filePath1="test1.cpp";
        // const file1content = await fileToBase64(filePath1);
        
        // Create a new document and save it to the database
        const doc = new submissionModel({
            submission_id: submission_id,
            content: "file1content"
        });
        await doc.save();
      
        // Delete temporary files after 10 seconds
        // setTimeout(async () => {
        //     await deleteFile(filePath1);
        //     await deleteFile(filePath2);
        // }, 10000);
    } catch (error) {
        console.error('Error in runCode:', error);
        // Handle error here
    }
}

//  runCode("tdgfgfcgfc","#include<iostream> using namespace std; int main(){int t; cin>>t;cout<<<<endl; }","4");
