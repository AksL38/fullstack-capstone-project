// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    
    try {
        await client.connect();
        console.log("Connected succesfully to server")

        dbInstance = client.db(dbName)
        return dbInstance;
    } catch (error) {
        console.log("Error in connecting to database.")
    }

    
}

module.exports = connectToDatabase;
