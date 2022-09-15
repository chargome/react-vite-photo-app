import { FilterablePhotoList } from '../FilterablePhotoList';
import { usePhotoStore } from '../../hooks';
import { PhotoUploader } from '../PhotoUploader';
import { Alert } from '../Alert/Alert';

export const App = (): JSX.Element => {
  const { photos, handleDelete, handleUpload } = usePhotoStore();

  return (
    <div>
      <h1 className="mt-20 mb-10 text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-anyline text-center py-5 font-extrabold uppercase tracking-wider">
        Photo App
      </h1>
      <div className="h-60">
        <PhotoUploader handleUpload={handleUpload} />
      </div>
      <div className="mx-20 mt-20 min-h-screen">
        <h2 className="text-3xl font-bold">Uploaded photos:</h2>
        {
          photos.length < 1
            ? <div className="text-sm p-4">No photos added yet</div>
            : <FilterablePhotoList photos={photos} handleDeletePhoto={handleDelete} />
        }
      </div>
      <Alert />
    </div>
  )
};

