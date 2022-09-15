import React from 'react';
import { PhotoList } from '../PhotoList/PhotoList';
import { PhotoPreview } from '../PhotoPreview';
import { PhotoUploader } from '../PhotoUploader';

const App = (): JSX.Element => {
  const [photos, setPhotos] = React.useState<File[]>([]);

  const handleUpload = React.useCallback((photos: File[]) => {
    setPhotos((prev) => [...prev, ...photos]);
  }, []);

  const handleDeletePhoto = React.useCallback((toDeleteFileName: string) => {
    setPhotos((prev) => prev.filter((current) => current.name !== toDeleteFileName));
  }, [])

  return (
    <div>
      <h1>Photos App</h1>
      <PhotoUploader handleUpload={handleUpload} />
      <h2>Uploaded photos:</h2>
      <PhotoList photos={photos} handleDeletePhoto={handleDeletePhoto} />
    </div>
  )
}

export default App
