
class Path {
    constructor(id, destination, avgLatency, avgBandwidthCs64, avgBandwidthSc64, avgBandwidthCsMTU, avgBandwidthScMTU, avgLoss, timestamp, hopsNumber, hopsSequence, isolatedDomains){
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
        this.hopsSequence = hopsSequence;
        this.isolatedDomains = isolatedDomains;
    }
};

module.exports = {Path};