import { Worker, workerData } from "worker_threads";
import fs from 'fs';

// const Piscina = require("piscina")

const threads = [];

function createCppWorker(id, file1,file2) {
    const worker = new Worker("./apps/server/Code-blocks/cpp/worker-thread.js", { workerData: { a: file1,b:file2, c: id } });

    worker.on('message', (message) => {
        console.log(`Thread ${id} received message: ${message}`);
    });

    worker.on('error', (error) => {
        console.error(`Thread ${id} error: ${error.message}`);
    });

    worker.on('exit', (code) => {
        console.log(`Thread ${id} exited with code ${code}`);
    });

    threads.push(worker);
}

function getCppThreads() {
    return threads.length;
}

export { createCppWorker, getCppThreads };
