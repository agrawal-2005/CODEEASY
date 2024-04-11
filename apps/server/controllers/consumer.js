import { kafka } from "./client.js";
import { runCode } from './Contest.js';

const consumer = kafka.consumer({ groupId: 'server1' });

const handleFileMessage = async ({ key, value }) => {
    try {
        const { file1Content, file2Content } = JSON.parse(value);
        // console.log("in sever",file1Content,file2Content)
        const decodedFile1Content = Buffer.from(file1Content, 'base64').toString('utf-8');
        const decodedFile2Content = Buffer.from(file2Content, 'base64').toString('utf-8');
        runCode(key, decodedFile1Content, decodedFile2Content);
            // console.log("in consumer.js ", decodedFile1Content);

        // Here you can perform further processing with the decoded file content
    } catch (error) {
        console.error("Error occurred while handling message:", error);
    }
};

const run = async () => {
    try {
        await consumer.connect();
        await consumer.subscribe({ topic: 'CPP' });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                    value: message.value.toString(),
                });
                if (message.key) {
                    console.log("Received message with key:", message.key.toString());
                }
                await handleFileMessage(message);
            },
        });
    } catch (error) {
        console.error("Error occurred while consuming messages:", error);
        // If an error occurs during message consumption, you might want to handle it appropriately
    }
};

// Exporting the run function as part of the module
export { run };
