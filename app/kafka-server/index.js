// server.mjs

import express from 'express';
import cors from 'cors'; // Import cors package
import { kafka } from "./client.js";
import  {handleCode }  from './submit.js'
const app = express();
const producer = kafka.producer();

app.use(express.json());
app.use(cors()); // Use cors middleware
app.post('/send-to-kafka', async (req, res) => {
  const { file1, file2, language } = req.body;
  // console.log(file1, file2);

  if (file1 && file2) {
    try {
      handleCode(file1, file2);
    } catch(error) {
      res.send("File1 or File2 is empty");
    }
  } else {
    res.send("File1 or File2 is empty");
  }
});

app.listen(3003, () => {
  console.log('Server running on port 3001');
});
