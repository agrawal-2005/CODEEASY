import { kafka } from "./client.js";

const producer = kafka.producer();

// async function fileToBase64(data) {
//     try {
//         // console.log(data);
//         const buffer = Buffer.from(data, 'utf-8');
//         const base64String = buffer.toString('base64');
//         return base64String;      } catch (error) {
//         throw new Error("Error encoding file to base64: " + error.message);
//     }
// }

async function handleCode(file1, file2) {
    try {
        const uniqueId = generateUniqueId();

        await producer.connect();
        console.log("Reading files and sending to Kafka...");
        // console.log("File 1 Content :", file1);
        // console.log("File 1 Content :", file2);

        const file1Content = file1;
        const file2Content = file2;
        
        console.log("File 1 Content (base64):", file1Content);
        console.log("File 2 Content (base64):", file2Content);

        await sendToKafka(file1Content, file2Content, uniqueId);
        console.log("Files sent successfully.");
    } catch (error) {
        console.error("Error occurred while handling files:", error);
    }
}

async function sendToKafka(file1Content, file2Content, uniqueId) {
    try {
        await producer.send({
            topic: "CPP",
            messages: [
                {
                    key: uniqueId,
                    value: JSON.stringify({ file1Content, file2Content }),
                },
            ],
        });
    } catch (error) {
        throw new Error("Error sending files to Kafka: " + error.message);
    }
}

function generateUniqueId() {
    return Math.random().toString(36).substring(7);
}

export { handleCode };
