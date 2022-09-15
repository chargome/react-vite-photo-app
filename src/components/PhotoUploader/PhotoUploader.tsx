import React from "react";
import { Button } from "../Button";
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
    <div className="flex flex-col items-center">
      <div className={`${tempFiles.length === 0 ? 'h-0' : 'h-46'} transition-all overflow-hidden`}>
        <PhotoList
          handleDeletePhoto={handleDelete}
          photos={tempFiles}
          variant="horizontal"
        />
      </div>
      <label>
        <div className="text-md text-center border-dashed border-2 border-anyline rounded w-80 p-6 cursor-pointer">
          Click here to choose files
        </div>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          multiple
          onChange={(e) =>
            setTempFiles(Array.from(e.target.files || []))
          }
        />
      </label>
      <Button
        disabled={tempFiles.length < 1}
        handleClick={handleClickUpload}
      >
        Upload
      </Button>
    </div>
  );
}