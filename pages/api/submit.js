import { connectToDatabase } from './db'
import multer from 'multer'

const upload = multer()

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { photo, title, species, native, description } = req.body

  const db = await connectToDatabase()

  const collection = db.collection('submissions')

  const result = await collection.insertOne({
    photo,
    title,
    species,
    native,
    description,
    status: 'pending',
  })

  if (result.acknowledged) {
    res.status(201).json({ message: 'Submission received' })
  } else {
    res.status(500).json({ message: 'Error processing submission' })
  }
}
