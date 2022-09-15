import React from "react";
import { PhotoList } from "../PhotoList";
import { PhotoPreview } from "../PhotoPreview";

interface Props {
  handleUpload: ([photos]: any[]) => void;
}

export const PhotoUploader = ({ handleUpload }: Props): JSX.Element => {
  const [tempFiles, setTempFiles] = React.useState<File[]>([]);

  const handleClickUpload = React.useCallback(() => {
    handleUpload(tempFiles);
    setTempFiles([]);
  }, [handleUpload, tempFiles]);

  const handleDelete = React.useCallback((toDeleteFileName: string) => {
    setTempFiles(
      (prev) => 
        prev.filter((current) => current.name !== toDeleteFileName)
    );
  }, []);

  return (
    <>
      <PhotoList handleDeletePhoto={handleDelete} photos={tempFiles} />
      <label>
        <div style={{ height: '50px', border: '1px dashed black' }}>
          Click here to choose files
        </div>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) =>
            setTempFiles(Array.from(e.target.files || []))
          }
          multiple
        />
      </label>
      <button
        disabled={tempFiles.length < 1}
        onClick={handleClickUpload}
      >
        Upload
      </button>
    </>
  );
}