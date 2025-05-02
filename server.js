import { MongoClient } from "mongodb";
import 'dotenv/config.js';

const url = process.env.ATLAS_URI;

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err.stack);
  }
  finally {
    await client.close();
  }
}

run().catch(console.dir);