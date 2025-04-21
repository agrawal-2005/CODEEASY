import { createPythonWorker } from './python/server.js';
import { createCppWorker } from './cpp/server.js';
// import { createJavaWorker } from './java/server.js';

// createPythonWorker(1, "hello.py");
// createPythonWorker(2, "demo.py","input.txt");
// createPythonWorker(3, "demo2.py");
// createPythonWorker(4, "demo3.py");

createCppWorker(1,"test1.cpp","input.txt");
// createCppWorker(2,"test2.cpp")

// createJavaWorker(1, "P1.java");
// createJavaWorker(2, "P2.java");
