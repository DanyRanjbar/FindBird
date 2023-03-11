import { connectToDatabase } from './db'

export default async function handler(req, res) {
  const db = await connectToDatabase()

  const collection = db.collection('submissions')

  const submissions = await collection.find({ status: 'approved' }).toArray()

  res.status(200).json(submissions)
}
