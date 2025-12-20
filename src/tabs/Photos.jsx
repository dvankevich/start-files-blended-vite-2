import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import { useEffect, useState } from 'react';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';

import images from '../apiService/photos.json';

const Photos = () => {
  const [query, setQuery] = useState('');

  const getQuery = inputValue => {
    setQuery(inputValue);
  };

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={getQuery} />
      {images.length > 0 && <PhotosGallery images={images} />}
    </>
  );
};

export default Photos;
