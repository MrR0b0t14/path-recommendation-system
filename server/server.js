const { password } = require('./MongoPassword.js');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Antonio:" + password + "@cluster0.roqxq2n.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("scionStatsDB").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const collection = client.db("scionStatsDB").collection("availableServers");
    const result = await collection.find({}).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
