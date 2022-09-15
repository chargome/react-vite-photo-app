import React from "react";

interface Props {
  photo: File;
  handleDelete: (fileName: string) => void;
}

export const PhotoPreview = ({ photo, handleDelete }: Props): JSX.Element => {
  const [photoUrl] = React.useState(URL.createObjectURL(photo));

  return (
    <>
      <img width="80px" height="80px" src={photoUrl} />
      <div>{photo.name}</div>
      <button onClick={() => handleDelete(photo.name)}>deleteme</button>
    </>
  );
}