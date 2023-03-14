// pages/api/submit-form.js
import dbConnect from '../../db';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'your-folder-name',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

const upload = multer({ storage: storage });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const db = await dbConnect();
      const { title, species, native, description } = req.body;
      const result = await upload.single('photo')(req, res);
      const imageUrl = result?.secure_url || '';

      const data = { title, species, native, description, imageUrl };
      const createdData = await db.collection('your-collection-name').insertOne(data);

      if (createdData) {
        res.status(200).json({ message: 'Form submitted successfully!' });
      } else {
        res.status(400).json({ message: 'Error submitting the form.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
