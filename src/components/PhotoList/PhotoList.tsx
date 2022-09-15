import React from "react";
import { PhotoPreview } from "../PhotoPreview";

interface Props {
  photos: File[];
  handleDeletePhoto: (fileName: string) => void;
}

export const PhotoList = ({ photos, handleDeletePhoto }: Props): JSX.Element => {
  const [query, setQuery] = React.useState('');

  const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <>
      <input type="text" value={query} onChange={handleInputChange} />
      <div>
        {
          photos
            .filter((unfiltered) => unfiltered.name.includes(query))
            .map((filtered) => (
              <PhotoPreview
                key={filtered.name}
                photo={filtered}
                handleDelete={() => handleDeletePhoto(filtered.name)}
              />
            ))
        }
      </div>
    </>
  );
};