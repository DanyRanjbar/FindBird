import dbConnect from '../../db';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const db = await dbConnect();
      const { id, status } = req.body;

      const updatedData = await db
        .collection('your-collection-name')
        .findOneAndUpdate(
          { _id: id },
          { $set: { status: status } },
          { returnOriginal: false }
        );

      if (updatedData) {
        res.status(200).json({ message: 'Data updated successfully!' });
      } else {
        res.status(404).json({ message: 'Data not found.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
