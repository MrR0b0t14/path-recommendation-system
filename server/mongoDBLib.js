// const sqlite = require('sqlite3');
// const crypto = require('crypto');
class Path {
    constructor(id, destination, avgLatency, avgBandwidthCs64, avgBandwidthSc64, avgBandwidthCsMTU, avgBandwidthScMTU, avgLoss, timestamp, hopsNumber, hops, isolatedDomains){
        this.id = id;
        this.destination = destination;
        this.avgLatency = avgLatency;
        this.avgBandwidthCs64 = avgBandwidthCs64;
        this.avgBandwidthSc64 = avgBandwidthSc64;
        this.avgBandwidthCsMTU = avgBandwidthCsMTU;
        this.avgBandwidthScMTU = avgBandwidthScMTU;
        this.avgLoss = avgLoss;
        this.timestamp = timestamp;
        this.hopsNumber = hopsNumber;
        this.hopsSequence = hops;
        this.isolatedDomains = isolatedDomains;
    }
};

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

async function connectToDatabase() {
    let conn;
    try {
      conn = await client.connect();
    } catch(e) {
      console.error(e);
    }
    return conn.db('scionStatsDB');
  }

/*This function retrieve all destinations from the db*/
const getDest = async () => {
    const destinationList = [];
    try {
        const db = await connectToDatabase();
        const collection = db.collection("availableServers");
        const destinations = await collection.find({}).toArray();
        for(const d of destinations){
            destinationList.push(d.source_address.split(",")[0]);
        } 
        return destinationList;
    } catch (error) {
        throw error;
    }
}
/*This function retrieve all Paths from the DB 
  and their stats*/
  const getPaths = async (dest) => {
    const pathsList = [];
    const regexPattern = dest ? `\\b${dest}#\\d+$` : `\\b.*#\\d+$`;
    const pipeline = [
        { $match: { hops: {$regex: new RegExp(regexPattern)} } },
    ];

    try {
        const db = await connectToDatabase();
        const collection = db.collection("paths_stats");
        const paths = await collection.aggregate(pipeline).toArray();

        for(const path of paths){
            const hops = path.hops.split(" ")
            const destination = hops[hops.length - 1].split("#")[0];
            pathsList.push(new Path(path._id, destination, path.avg_latency, path.avg_bandwidth_cs_64, path.avg_bandwidth_sc_64, path.avg_bandwidth_cs_MTU, path.avg_bandwidth_sc_MTU, path.avg_loss, path.timestamp, path.hops_number, path.hops, path.isolated_domains));
        }
        
        return pathsList;
    } catch (error) {
        throw error;
    }
}

const allFunct = {getPaths, getDest};

module.exports = {allFunct};