import { FilterablePhotoList } from '../FilterablePhotoList';
import { usePhotoStore } from '../../hooks';
import { PhotoUploader } from '../PhotoUploader';

export const App = (): JSX.Element => {
  const { photos, handleDelete, handleUpload } = usePhotoStore();

  return (
    <div>
      <h1>Photos App</h1>
      <PhotoUploader handleUpload={handleUpload} />
      <h2>Uploaded photos:</h2>
      <FilterablePhotoList photos={photos} handleDeletePhoto={handleDelete} />
    </div>
  )
};

