const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dbname = "crud_mongodb";

const url =
  "mongodb+srv://rest:Caitlin1966__@cluster0.8crs3.mongodb.net/Cluster0?authSource=admin&replicaSet=atlas-x7gn25-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

const state = {
  db: null,
};

const connect = (cb) => {
  if (state.db) cb();
  else {
    MongoClient.connect(url, (err, client) => {
      if (err) cb(err);
      else {
        state.db = client.db(dbname);
        cb();
      }
    });
  }
};

const getPrimaryKey = (_id) => {
  return ObjectID(_id);
};

const getDB = () => {
  return state.db;
};

module.exports = { getDB, connect, getPrimaryKey };
