import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "CodeEditor", // Unique identifier for the Kafka client
  brokers: ['localhost:9092'], // Kafka broker address
});

export { kafka };
