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
    
    const filters = { 
      $match: {  
        avg_latency: {$gt : 0, $lt : 900},
      } 
    };

    const pipeline = [
      { 
        $match: { 
          hops: {$regex: new RegExp(regexPattern)}, 
          avg_bandwidth_sc_MTU: { $ne: "Information not available" },
          avg_latency: {$ne : "0ms"}
        } 
      },
      {
        $addFields: {
          idWithoutTimestamp: { $substr: ["$_id", 0, { $subtract: [{ $strLenCP: "$_id" }, 27] }] },
          pathNum: {$toInt: { $substr: ["$_id", 2, { $subtract: [{ $strLenCP: "$_id" }, 29] }] }},
          destNum: {$toInt: { $substr: ["$_id", 0, 1 ]}}
        }
      },
      {
        $addFields: {
          avg_latency_number: { $toDouble: {$substr: ["$avg_latency", 0, { $subtract: [{ $strLenCP: "$avg_latency" }, 2] }] }},
          avg_loss_number: { $toDouble: { $arrayElemAt: [{ $split: ["$avg_loss", "%"] }, 0] } },
          avg_bandwidth_sc_MTU_number: { $toDouble: { $arrayElemAt: [{ $split: ["$avg_bandwidth_sc_MTU", "Mbps" ] }, 0] } },
          avg_bandwidth_cs_MTU_number: { $toDouble: { $arrayElemAt: [{ $split: ["$avg_bandwidth_cs_MTU", "Mbps" ] }, 0] } },
        }
      },
      {
        $group: {
          _id: "$idWithoutTimestamp",
          avg_latency: { $avg: "$avg_latency_number" },
          avg_bandwidth_sc_MTU: { $avg: "$avg_bandwidth_sc_MTU_number" },
          avg_bandwidth_cs_MTU: { $avg: "$avg_bandwidth_cs_MTU_number" },
          avg_loss: { $avg: "$avg_loss_number" },
          hops: { $first: "$hops" },
          hops_number: { $first: "$hops_number" },
          isolated_domains: { $first: "$isolated_domains" },
          pathNum: {$first: "$pathNum"},
          destNum: {$first: "$destNum"}
        }
      },
      filters,
      {
        $sort: {
          destNum:1,
          pathNum: 1
        }        
      },
      {
        $project: {
              idWithoutTimestamp: 1, // Get the first part of the array as the new _id
              avg_latency: { $concat: [{$toString: "$avg_latency"},"ms"]},
              avg_bandwidth_sc_MTU: { $concat: [{$toString: "$avg_bandwidth_sc_MTU"},"Mbps"]},
              avg_bandwidth_cs_MTU: { $concat: [{$toString: "$avg_bandwidth_cs_MTU"},"Mbps"]},
              avg_loss: { $concat: [{$toString: "$avg_loss"},"%"]},
              hops_number: 1,
              hops: 1,
              isolated_domains: 1,
            }
      }
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