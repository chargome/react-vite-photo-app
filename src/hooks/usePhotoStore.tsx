import React from 'react';

export const usePhotoStore = () => {
  const [photos, setPhotos] = React.useState<File[]>([]);

  const handleUpload = React.useCallback((photos: File[]) => {
    setPhotos((prev) => [...prev, ...photos]);
  }, []);

  const handleDelete = React.useCallback((toDeleteFileName: string) => {
    setPhotos((prev) => prev.filter((current) => current.name !== toDeleteFileName));
  }, []);

  return {
    photos,
    handleUpload,
    handleDelete,
  };
};