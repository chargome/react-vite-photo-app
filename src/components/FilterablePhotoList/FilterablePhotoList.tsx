import React from 'react';
import { PhotoList } from '../PhotoList';

interface Props {
  photos: File[];
  handleDeletePhoto: (fileName: string) => void;
}

export const FilterablePhotoList = ({ photos, handleDeletePhoto }: Props): JSX.Element => {
	const [query, setQuery] = React.useState('');
  const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <>
      <div className="p-4">
        <label className="text-md">Filter images by name:</label>
        <input
          className="bg-black text-white p-1 ring-1 ring-white rounded m-2"
          type="text"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <PhotoList
        photos={photos.filter((current) => current.name.includes(query))}
        handleDeletePhoto={handleDeletePhoto}
        variant="grid"
      />
    </>
  );
};