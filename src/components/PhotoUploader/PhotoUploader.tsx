import React from 'react';
import { useNotificationStore } from '../../store/Notification';
import { Button } from '../Button';
import { FileInput } from '../FileInput';
import { PhotoList } from '../PhotoList';

interface Props {
  handleUpload: ([photos]: File[]) => void;
}

export const PhotoUploader = ({ handleUpload }: Props): JSX.Element => {
  const [tempFiles, setTempFiles] = React.useState<File[]>([]);

  const showNotification = useNotificationStore((state) => state.show);

  const handleClickUpload = React.useCallback(() => {
    handleUpload(tempFiles);
    setTempFiles([]);
    showNotification('Your files have been uploaded!');
  }, [handleUpload, tempFiles]);

  const handleClickDelete = React.useCallback((toDeleteFileName: string) => {
    setTempFiles(
      (prev) => 
        prev.filter((current) => current.name !== toDeleteFileName)
    );
  }, []);

  return (
    <div className="flex justify-center">
      {
        tempFiles.length > 0
          ? (
            <div className="flex flex-col items-center">
              <PhotoList
                handleDeletePhoto={handleClickDelete}
                photos={tempFiles}
                variant="horizontal"
              />
              <Button
                disabled={tempFiles.length < 1}
                handleClick={handleClickUpload}
              >
                Upload
              </Button>
            </div>
          )
          : <FileInput setFiles={setTempFiles} /> 
      }
    </div>
  );
};

