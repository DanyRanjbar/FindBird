import mongoose from 'mongoose';
const { MongoClient } = require('mongodb');

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  try {
    const client = await mongoose.connect(uri, options);
    console.log('Connected to database');
    return client.connection.db;
  } catch (error) {
    console.log('Error connecting to database:', error);
    return null;
  }
  const dbName = 'my-database';
const collectionName = 'my-collection';

const db = client.db(dbName);
const collection = db.collection(collectionName);

console.log(collection); // should log the collection object

}
