import React from "react";
import { PhotoPreview } from "../PhotoPreview";

interface Props {
  photos: File[];
  handleDeletePhoto: (fileName: string) => void;
}

export const PhotoList = ({
  photos,
  handleDeletePhoto,
}: Props): JSX.Element => {
  return (
    <div>
      {
        photos.map((photo) => (
          <PhotoPreview
            key={photo.name}
            photo={photo}
            handleDelete={() => handleDeletePhoto(photo.name)}
          />
        ))
      }
    </div>
  );
};