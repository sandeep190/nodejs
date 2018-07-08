db = db.getSiblingDB('country')
cursor = db.students.find({$and:[{"scores.score":{$gt:40}},{"scores.type":"exam"}]})
while ( cursor.hasNext() ){
   printjson(cursor.next());
}

rs.initiate( {
    _id : "rs0",
    members: [
       { _id: 0, host: "localhost:27019" },
       { _id: 1, host: "localhost:27020" },
       { _id: 2, host: "localhost:27021" }
    ]
 })