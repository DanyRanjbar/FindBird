import Layout from '../components/Layout';
import ImageList from '../components/ImageList';
import { connectToDatabase } from '../lib/db';
import Image from '../models/image';

export default function HomePage({ images }) {
  return (
    <Layout>
      <div className="container">
        <h1>Image Gallery</h1>
        <ImageList images={images} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    await connectToDatabase();

    const images = await Image.find({ approved: true }).sort({ createdAt: -1 }).limit(20).lean();

    return {
      props: { images },
    };
  } catch (error) {
    console.error('Could not connect to database', error);

    return {
      notFound: true,
    };
  }
}
