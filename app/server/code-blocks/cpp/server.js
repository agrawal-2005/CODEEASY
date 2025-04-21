import { Worker, workerData } from "worker_threads";
import fs from 'fs';

// const Piscina = require("piscina")

const threads = [];
async function writeToFile(content, filePath) {
    try {
        // console.log(filePath,content)
        // console.log(content)
        await fs.promises.writeFile(filePath, content);
        console.log(`File ${filePath} written successfully.`);
    } catch (err) {
        console.error(`Error writing file ${filePath}: ${err.message}`);
        throw err;
    }
}

async function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
async function createCppWorker(submission_id, sourcefile,inputfile) {
    console.log(sourcefile,submission_id)
    const filePath1 = `${submission_id}.cpp`;
    console.log(filePath1);
    await writeToFile(sourcefile, filePath1);
    console.log(filePath1);

    const filePath2 = `${submission_id}.txt`;
    await writeToFile(inputfile, filePath2);
    console.log(filePath2);

    
    const worker = new Worker("./apps/server/Code-blocks/cpp/worker-thread.js", { workerData: { a: filePath1,b:filePath2, c: submission_id } });

    worker.on('message', (message) => {
        console.log(`Thread ${submission_id} received message: ${message}`);
    });

    worker.on('error', (error) => {
        console.error(`Thread ${submission_id} error: ${error.message}`);
    });

    worker.on('exit', (code) => {
        console.log(`Thread ${submission_id} exited with code ${code}`);
    });

    setTimeout(async () => {
        await deleteFile(filePath1);
        await deleteFile(filePath2);
    }, 10000);
    threads.push(worker);
}

function getCppThreads() {
    return threads.length;
}

export { createCppWorker, getCppThreads };
