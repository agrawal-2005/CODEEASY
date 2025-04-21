import runPythonCode from './Exexute.js';
import { parentPort, workerData } from "worker_threads";

async function run_worker(file1,file2, id) {
    try {
        console.log(file1,file2,id)

        const stdout = await runPythonCode(file1,file2, id);
        console.log(stdout);
        parentPort.postMessage(stdout);
    } catch (error) {
        console.error(error);
    }
}

run_worker(workerData.a,workerData.b, workerData.c);
