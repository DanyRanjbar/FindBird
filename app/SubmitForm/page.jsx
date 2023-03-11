"use client"
import { useState } from 'react'

export default function Home() {
  const [photo, setPhoto] = useState('')
  const [title, setTitle] = useState('')
  const [species, setSpecies] = useState('')
  const [native, setNative] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('photo', photo)
    formData.append('title', title)
    formData.append('species', species)
    formData.append('native', native)
    formData.append('description', description)

    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      alert('Your submission has been received and is awaiting approval.')
      setPhoto('')
      setTitle('')
      setSpecies('')
      setNative('')
      setDescription('')
    } else {
      alert('There was an error submitting your form.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="photo">Photo:</label>
        <input
          type="file"
          name="photo"
          id="photo"
          accept="image/*"
          onChange={(event) => setPhoto(event.target.files[0])}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="species">Species:</label>
        <input
          type="text"
          name="species"
          id="species"
          value={species}
          onChange={(event) => setSpecies(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="native">Native:</label>
        <input
          type="text"
          name="native"
          id="native"
          value={native}
          onChange={(event) => setNative(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
  
