import crypto from "node:crypto";
import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGO_URL);

const shardNames = ["SHARD_A", "SHARD_B", "SHARD_C"];
let nextShardIndex = 0;

function getNextShard() {
  const shard = shardNames[nextShardIndex];
  nextShardIndex = (nextShardIndex + 1) % shardNames.length;
  return shard;
}

async function main() {
  await client.connect();
  console.log("MongoDB connected successfully!");

  const db = client.db("sharding_demo");

  // Each collection represents a logical shard
  const shards = {
    SHARD_A: db.collection("shard_a"),
    SHARD_B: db.collection("shard_b"),
    SHARD_C: db.collection("shard_c"),
  };

  // Stores user ID -> shard name
  const directory = db.collection("shard_directory");

  async function createUser(name, email) {
    const id = crypto.randomUUID();
    const shardName = getNextShard();

    const user = {
      _id: id,
      name,
      email,
      createdAt: new Date(),
    };

    await shards[shardName].insertOne(user);

    await directory.insertOne({
      _id: id,
      shardName,
    });

    console.log(`User saved in ${shardName}`);
    return id;
  }

  async function getUserById(id) {
    const mapping = await directory.findOne({ _id: id });

    if (!mapping) return null;

    return await shards[mapping.shardName].findOne({ _id: id });
  }

  const id1 = await createUser("Amit", "amit@example.com");
  await createUser("Priya", "priya@example.com");
  await createUser("Rahul", "rahul@example.com");
  await createUser("Neha", "neha@example.com");

  console.log("Amit:", await getUserById(id1));

  for (const [name, collection] of Object.entries(shards)) {
    console.log(name, await collection.countDocuments());
  }
}

main()
  .catch(console.error)
  .finally(() => client.close());