// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/country";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");

//   db.close();
// });

const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'country';
 
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  console.log("Connected successfully to server");
 const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
 
  //client.close();
  });

  


const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    console.log("Inserted 3 documents into the collection");
    //callback(result);
  });
}