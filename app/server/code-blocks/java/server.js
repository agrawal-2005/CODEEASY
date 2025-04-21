import { Worker, workerData } from "worker_threads";
import fs from 'fs';

const threads = [];

function createJavaWorker(id, file1) {
    const worker = new Worker("./Code-blocks/java/worker-thread.js", { workerData: { a: file1, c: id } });

    worker.on('message', (message) => {
        console.log(`Thread ${id} received message: ${message}`);
    });

    worker.on('error', (error) => {
        console.error(`Thread ${id} error: ${error.message}`);
    });

    worker.on('exit', (code) => {
        console.log(`Thread ${id} exited with code ${code}`);
        const file = file1.split(".")[0];
        fs.unlink(`${file}.class`, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            } else {
                // File deleted successfully
            }
        });
    });

    threads.push(worker);
}

createJavaWorker('../P1.java',1)
export default createJavaWorker;
