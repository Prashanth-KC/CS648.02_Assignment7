const { MongoClient } = require('mongodb');


const client = new MongoClient(`mongodb+srv://PrashanthKattelaChandrashekar:${process.env.MONGO_PASS}@prashanth-cs648.rvhb2.mongodb.net/Assignment4?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
});

let inventory; let
  counter;
client.connect((err, cl) => {
  const db = cl.db();
  inventory = db.collection('inventory');
  counter = db.collection('counter');
});

function getInventory() { return inventory; }
function getCounter() { return counter; }

module.exports = { getCounter, getInventory };
