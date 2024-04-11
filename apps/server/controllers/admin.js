import { kafka } from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "CPP",
        numPartitions: 1,
      },
    ],
  });
  console.log("Topic Created Success [rider-updates]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();