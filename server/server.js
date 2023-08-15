'use strict';
const express = require('express');
const PORT = 3001;
const morgan = require('morgan');
const cors = require('cors');
const db = require('./mongoDBLib.js').allFunct;
const app = express();
app.use(morgan('common'));
app.use(express.json());
// set up and enable cors
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

app.use(cors(corsOptions));
app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}/`));


app.get('/api/destinations', async (_req, res) => {
  db.getDest().then((destinations) => {
    console.log(destinations)
    return res.status(200).json(destinations)
  }).catch((err) => {
      return res.status(500).json(err)
  })
});
app.get('/api/paths/', async (_req, res) => {
  const destination = null;
  db.getPaths(destination).then((paths) => {
    // console.log(paths)
    return res.status(200).json(paths)
  }).catch((err) => {
      return res.status(500).json(err)
  })
});

app.get('/api/paths/:destAddress', async (req, res) => {
  const destination = decodeURIComponent(req.params.destAddress);
  db.getPaths(destination).then((paths) => {
    // console.log(paths)
    return res.status(200).json(paths)
  }).catch((err) => {
      return res.status(500).json(err)
  })
});