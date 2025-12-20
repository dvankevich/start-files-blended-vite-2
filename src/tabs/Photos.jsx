import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import { useEffect, useState } from 'react';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Button from '../components/Button/Button';
import { getPhotos } from '../apiService/photos';

const Photos = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const getQuery = inputValue => {
    setQuery(inputValue.toLowerCase());
    setImages([]);
  };

  useEffect(() => {
    if (!query) return;
    console.log('Search query updated:', query);

    async function fetchImages() {
      const data = await getPhotos(query, page);
      console.log(data);

      setImages(prevImages => [...prevImages, ...data.photos]);
      if (data.total_results > data.page * data.per_page) {
        setIsLoadMore(true);
      } else {
        setIsLoadMore(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={getQuery} />
      {images.length > 0 && <PhotosGallery images={images} />}
      {isLoadMore && <Button onClick={handleLoadMore}>Load More</Button>}
    </>
  );
};

export default Photos;
