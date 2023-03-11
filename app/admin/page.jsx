"use client"
import { useState, useEffect } from 'react'
import { connectToDatabase } from '../api/db'

export default function Admin() {
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    async function getSubmissions() {
      const db = await connectToDatabase()

      const collection = db.collection('submissions')

      const submissions = await collection.find({ status: 'pending' }).toArray()

      setSubmissions(submissions)
    }

    getSubmissions()
  }, [])

  const handleApprove = async (id) => {
    const db = await connectToDatabase()

    const collection = db.collection('submissions')

    const result = await collection.updateOne(
      { _id: id },
      { $set: { status: 'approved' } }
    )

    if (result.modifiedCount === 1) {
      setSubmissions(submissions.filter((submission) => submission._id !== id))
    } else {
      alert('There was an error approving this submission.')
    }
  }

  return (
    <div>
      <h1>Submissions</h1>
      <ul>
        {submissions.map((submission) => (
          <li key={submission._id}>
            <img src={submission.photo} alt={submission.title} />
            <div>{submission.title}</div>
            <div>{submission.species}</div>
            <div>{submission.native}</div>
            <div>{submission.description}</div>
            <button onClick={() => handleApprove(submission._id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
