const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const client = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;



// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017";
// const dbName = "healthBooker";
// const client = new MongoClient(url, { useUnifiedTopology: true });

// client.connect(function (err) {
//   if (err) {
//     console.error("An error occurred connecting to MongoDB: ", err);
//   } else {
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);
//     const collection = db.collection("appointments");

//     collection.find({}).toArray(function (err, docs) {
//       if (err) {
//         console.error("An error occurred fetching data: ", err);
//       } else {
//         console.log("Fetched the following records:");
//         console.log(docs);
//       }

//       client.close();
//     });
//   }
// });


// const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
// const app = express();
// const url = 'mongodb://localhost:27017';
// const dbName = 'healthBooker';
// const client = new MongoClient(url, { useUnifiedTopology: true });

// app.get('/appointments', async (req, res) => {
//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection('appointments');
//     const appointments = await collection.find({}).toArray();
//     res.json(appointments);
//   } catch (err) {
//     console.error('An error occurred fetching data: ', err);
//     res.status(500).send('Error fetching data');
//   } finally {
//     await client.close();
//   }
// });

// app.listen(3000, () => console.log('Server is running on http://localhost:3000'));