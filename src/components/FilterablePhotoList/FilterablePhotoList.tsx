import React from "react";
import { PhotoList } from "../PhotoList";
import { PhotoPreview } from "../PhotoPreview";

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
      <input type="text" value={query} onChange={handleInputChange} />
      <div>
        <PhotoList
          photos={photos.filter((current) => current.name.includes(query))}
          handleDeletePhoto={handleDeletePhoto}
        />
      </div>
    </>
  );
};