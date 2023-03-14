"use client"

import { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState('');
  const [species, setSpecies] = useState('');
  const [native, setNative] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('species', species);
    formData.append('native', native);
    formData.append('description', description);
    formData.append('photo', photo);

    const response = await fetch('/api/submit-form', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setTitle('');
      setSpecies('');
      setNative('');
      setDescription('');
      setPhoto('');
      alert('Form submitted successfully!');
    } else {
      alert('There was an error submitting the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Species:
        <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} />
      </label>
      <label>
        Native:
        <input type="text" value={native} onChange={(e) => setNative(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Photo:
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
