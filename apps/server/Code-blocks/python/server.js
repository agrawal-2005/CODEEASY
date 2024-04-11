import { Worker } from "worker_threads";

const threads = [];

function createPythonWorker(id, file1,file2) {
    const worker = new Worker("./Code-blocks/python/worker-thread.js", { workerData: { a: file1, b:file2,c: id } });

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

function getPythonThreads() {
    return threads.length;
}

export { createPythonWorker, getPythonThreads };
