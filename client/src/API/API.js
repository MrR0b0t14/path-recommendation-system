import {Path} from './Path.js';
const SERVER_URL = 'http://localhost:3001/api';

async function loadDestinationList() {
    const url = SERVER_URL + '/destinations';
    try {
        let response;
        response = await fetch(url);

        if (response.ok) {
            const arr =  await response.json()
            // const courseList = arr.map((p) => new Path(p.id, p.destination, p.avgLatency, p.avgBandwidthCs64, p.avgBandwidthSc64, p.avgBandwidthCsMTU, p.avgBandwidthScMTU, p.avgLoss, p.timestamp, p.hopsNumber, p.hopsSequence, p.isolatedDomains));
            return arr;
        }
        else {
            const text = await response.text();
            throw new TypeError(text);
        }
    } catch(err){
        throw err
    }
}

/*This function is the one which fetches the request to get all courses from the server or only the ones of a study plan*/
async function loadPathsList(dest) {
    const url = SERVER_URL + '/paths' + dest;
    try {
        let response;
        response = await fetch(url);

        if (response.ok) {
            const arr =  await response.json()
            const pathList = arr.map((p) => new Path(p.id, p.destination, p.avgLatency, p.avgBandwidthCs64, p.avgBandwidthSc64, p.avgBandwidthCsMTU, p.avgBandwidthScMTU, p.avgLoss, p.timestamp, p.hopsNumber, p.hopsSequence, p.isolatedDomains));
            return pathList;
        }
        else {
            const text = await response.text();
            throw new TypeError(text);
        }
    } catch(err){
        throw err
    }
}

const API = {loadPathsList, loadDestinationList};
export default API;